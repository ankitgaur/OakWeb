oakAdminApp.controller('articleCtrl',['$scope','$http','$stateParams','$log','articleFactory','articleCategoryFactory', function($scope,$http,$stateParams,$log,articleFactory,articleCategoryFactory) {

	$scope.currentPage = 1;
	$scope.pageSize = 10;
	$scope.articles  = [];
	$scope.articleId = $stateParams.articleID;
  if($scope.articleId !="" && $scope.articleId !=undefined && $scope.articleId !='undefined'){
	 getArticleByID($scope.articleId); 
  }else{
	  getAllArticles();
  }
  

	$scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
  
  $scope.getArticleByID = function(articleID){
				
		articleFactory.getArticleByID(articleID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.article = response;
				//Fix for update Articles
				CKEDITOR.instances.editor2.setData(response.content);
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting articles from rest service');
  });
}
	
	$scope.createArticle = function(articleFormObj){
		
		var file =  $("#displayImage").get(0).files[0];
		var bdata = new FormData();
		
		bdata.append('category',articleFormObj.category);
		bdata.append('title',articleFormObj.title);
		bdata.append('intro',articleFormObj.intro);
		bdata.append('displayImage', file);
		bdata.append('content', CKEDITOR.instances.editor1.getData());
		
		articleFactory.createArticles(bdata)
				.then(function success(response) {
									
					getAllArticles();
					clearArticleForm(articleFormObj);
					$('#createArticleModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  article ');
	  }); 
	}
	$scope.updateArticle = function(articleID,articleFormObj){
		articleFormObj.content = CKEDITOR.instances.editor2.getData();
		articleFactory.updateArticles($scope.article,articleID)
				.then(function successCallback(response) {
					getAllArticles();
					clearArticleForm(articleFormObj);
				
				$('#updateArticleModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  article ');
	  });
	}
	
	$scope.deleteArticle= function(articleID){
		
		articleFactory.deleteArticleByID(articleID).then(function success(response) {
			$log.debug("article deleted successfully");
			getAllArticles();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting articles from rest service');
	  });
	}
	$scope.resetForm = function(articleFormObj){
		clearArticleForm(articleFormObj);
	}
	
	function clearArticleForm(articleFormObj){
			articleFormObj.category=null;
			articleFormObj.title=null;
			articleFormObj.displayImage=null;
			CKEDITOR.instances.editor2.setData("Enter Text");
		
	}
	
	function getArticleByID(articleID){
		
		articleFactory.getArticleByID(articleID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.article = response;
				
				//$('textarea#editor2').html(response.content);
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting articles from rest service');
  });
}
		
	function getAllArticles(){
		
		articleFactory.getArticles().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {						
					$scope.articles = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting articles from rest service');
	  });
		
		articleCategoryFactory.getArticleCategories().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {						
					$scope.articleCategories = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting articleCategories from rest service');
	  });
		
		
	}

	
}]);
