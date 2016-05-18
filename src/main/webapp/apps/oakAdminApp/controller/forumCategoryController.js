oakAdminApp.controller('forumCategoriesCtrl',['$scope','$http','$stateParams','$log','forumCategoriesFactory', function($scope,$http,$stateParams,$log,forumCategoriesFactory) {

	$scope.currentPage = 1;
	$scope.pageSize = 10;
	$scope.forumCategories  = [];
	$scope.forumCategoryId = $stateParams.forumCategoryID;
  if($scope.forumCategoryId !="" && $scope.forumCategoryId !=undefined && $scope.forumCategoryId !='undefined'){
	  getForumCategoryByID($scope.forumCategoryId); 
  }else{
	  getAllForumCategories();
  }
  

	$scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
  
  $scope.getForumCategoryByID = function(forumCategoryID){
				
		forumCategoriesFactory.getForumCategoryByID(forumCategoryID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.forumCategory = response;				
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting forumCategories from rest service');
  });
}
	
	$scope.createForumCategory = function(forumCategoryFormObj){
		
		forumCategoriesFactory.createForumCategory(this.forumCategory)
				.then(function success(response) {
									
					getAllForumCategories();
					clearForm(forumCategoryFormObj);
					$('#createForumCategoryModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  forumCategory ');
	  }); 
	}
	$scope.updateForumCategory = function(forumCategoryID,forumCategoryFormObj){
					
		forumCategoriesFactory.updateForumCategory($scope.forumCategory,forumCategoryID)
				.then(function successCallback(response) {
					getAllForumCategories();
					clearForm(forumCategoryFormObj);
				
				$('#updateForumCategoryModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while updating  articleCategory ');
	  });
	}
	
	$scope.deleteForumCategory = function(forumCategoryID){
		
		forumCategoriesFactory.deleteForumCategoryByID(forumCategoryID).then(function success(response) {
				getAllForumCategories();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting forumCategories from rest service');
	  });
	}
	$scope.resetForm = function(forumCategoryFormObj){
		clearForm(forumCategoryFormObj);
	}
	
	function clearForm(forumCategoryFormObj){
		forumCategoryFormObj.id=null;
		forumCategoryFormObj.name=null;
		forumCategoryFormObj.description=null;
		forumCategoryFormObj.displayimage=null;		
	}
	
	function getForumByID(forumCategoryID){
		
		forumCategoriesFactory.getForumCategoryByID(forumCategoryID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.forumCategory = response;
			
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting forumCategories from rest service');
  });
}
		
	function getAllForumCategories(){
		
		forumCategoriesFactory.getForumCategories().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {						
					$scope.forumCategories = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting forumCategories from rest service');
	  });
	}

	
}]);
