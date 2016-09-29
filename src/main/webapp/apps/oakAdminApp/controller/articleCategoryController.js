oakAdminApp.controller('articleCategoryCtrl',['$scope','$http','$stateParams','$log','articleCategoryFactory', function($scope,$http,$stateParams,$log,articleCategoryFactory) {

	$scope.currentPage = 1;
	$scope.pageSize = 10;
	$scope.articleCategories  = [];
	$scope.articleCategoryId = $stateParams.articleCategoryID;
  if($scope.articleCategoryId !="" && $scope.articleCategoryId !=undefined && $scope.articleCategoryId !='undefined'){
	  getArticleCategoryByID($scope.articleCategoryId); 
  }else{
	  getAllArticleCategories();
  }
  

	$scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
  
  $scope.getArticleCategoryByID = function(articleCategoryID){
				
		articleCategoryFactory.getArticleCategoryByID(articleCategoryID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.articleCategory = response;				
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting articleCategories from rest service');
  });
}
	
	$scope.createArticleCategory = function(articleCategoryFormObj){
		
		var file =  $("#displayImage").get(0).files[0];
		var bdata = new FormData();
		
		bdata.append('category','ip2n');
		bdata.append('name',articleCategoryFormObj.name);
		bdata.append('description',articleCategoryFormObj.description);
		bdata.append('displayImage', file);
		
		articleCategoryFactory.createArticleCategory(bdata)
				.then(function success(response) {
									
					getAllArticleCategories();
					clearForm(articleCategoryFormObj);
					$('#createArticleCategoryModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  articleCategory ');
	  }); 
	}
	$scope.updateArticleCategory = function(articleCategoryID,articleCategoryFormObj){
					
		articleCategoryFactory.updateArticleCategory($scope.articleCategory,articleCategoryID)
				.then(function successCallback(response) {
					getAllArticleCategories();
					clearForm(articleCategoryFormObj);
				
				$('#updateArticleCategoryModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while updating  articleCategory ');
	  });
	}
	
	$scope.deleteArticleCategory = function(articleCategoryID){
		
		articleCategoryFactory.deleteArticleCategoryByID(articleCategoryID).then(function success(response) {
			$log.debug("articleCategory deleted successfully : " + getAllArticleCategories());
			getAllArticleCategories();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting articleCategories from rest service');
	  });
	}
	$scope.resetForm = function(articleCategoryFormObj){
		clearForm(articleCategoryFormObj);
	}
	
	function clearForm(articleCategoryFormObj){
		articleCategoryFormObj.id=null;
		articleCategoryFormObj.name=null;
		articleCategoryFormObj.description=null;
		articleCategoryFormObj.displayimage=null;		
	}
	
	function getArticleByID(articleCategoryID){
		
		articleCategoryFactory.getArticleCategoryByID(articleCategoryID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.articleCategory = response;
			
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting articleCategories from rest service');
  });
}
		
	function getAllArticleCategories(){
		
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
