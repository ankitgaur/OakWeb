oakAdminApp.controller('articleCtrl',['$scope','$http','$stateParams','$log','articleFactory', function($scope,$http,$stateParams,$log,articleFactory) {

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
  
  $scope.getArticleByID = function(category,updatedOn){
		var articleID = category+"_"+updatedOn;
		
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
		articleFormObj.content = CKEDITOR.instances.editor1.getData();
		articleFactory.createArticles(this.article)
				.then(function success(response) {
									
					getAllArticles();
					clearArticleForm(articleFormObj);
					$('#createArticleModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  article ');
	  }); 
	}
	$scope.updateArticle = function(category,updatedOn,articleFormObj){
		var articleID = category+"_"+updatedOn;
		console.log($scope.article);
		
		articleFactory.updateArticles($scope.article,articleID)
				.then(function successCallback(response) {
					getAllArticles();
					clearArticleForm(articleFormObj);
				
				$('#updateArticleModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  article ');
	  });
	}
	
	$scope.deleteArticle= function(category,updatedOn){
		var articleID = category+"_"+updatedOn;
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
					$scope.currentPage = 1;
					$scope.pageSize = 10;	
					$scope.articles = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting articles from rest service');
	  });
	}

	
}]);
