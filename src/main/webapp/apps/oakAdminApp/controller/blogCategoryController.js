oakAdminApp.controller('blogCategoryCtrl',['$scope','$http','$stateParams','$log','blogCategoryFactory', function($scope,$http,$stateParams,$log,blogCategoryFactory) {

	$scope.currentPage = 1;	
	$scope.pageSize = 10;
	$scope.blogCategories  = [];
	$scope.blogCategoryId = $stateParams.blogCategoryId;
  if($scope.blogCategoryId !="" && $scope.blogCategoryId !=undefined && $scope.blogCategoryId !='undefined'){
	  getBlogCategoryByID($scope.blogCategoryId); 
  }else{
	  getAllBlogCategories();
  }
  

	$scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
  
  $scope.getBlogCategoryByID = function(blogCategoryId){
				
		blogCategoryFactory.getBlogCategoryByID(blogCategoryId).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.blogCategory = response;				
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting blogCategories from rest service');
  });
}
	
	$scope.createBlogCategory = function(blogCategoryFormObj){
		
		blogCategoryFactory.createBlogCategory(this.blogCategory)
				.then(function success(response) {
									
					getAllBlogCategories();
					clearForm(blogCategoryFormObj);
					$('#createBlogCategoryModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  blogCategory');
	  }); 
	}
	$scope.updateBlogCategory = function(blogCategoryId,blogCategoryFormObj){
					
		blogCategoryFactory.updateBlogCategory($scope.blogCategory,blogCategoryId)
				.then(function successCallback(response) {
					getAllBlogCategories();
					clearForm(blogCategoryFormObj);
				
				$('#updateBlogCategoryModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while updating  blogCategory ');
	  });
	}
	
	$scope.deleteBlogCategory = function(blogCategoryId){
		
		blogCategoryFactory.deleteBlogCategoryByID(blogCategoryId).then(function success(response) {
			$log.debug("blogCategory deleted successfully : " + getAllBlogCategories());
			getAllBlogCategories();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting blogCategories from rest service');
	  });
	}
	$scope.resetForm = function(blogCategoryFormObj){
		clearForm(blogCategoryFormObj);
	}
	
	function clearForm(blogCategoryFormObj){
		blogCategoryFormObj.id=null;
		blogCategoryFormObj.name=null;
		blogCategoryFormObj.description=null;
		blogCategoryFormObj.displayimage=null;		
	}
	
	function getBlogCategoryByID(blogCategoryId){
		
		blogCategoryFactory.getBlogCategoryByID(blogCategoryId).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.blogCategory = response;
			
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting blogCategories from rest service');
  });
}
		
	function getAllBlogCategories(){
		
		blogCategoryFactory.getBlogCategories().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {						
					$scope.blogCategories = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting blogCategories from rest service');
	  });
	}

	
}]);
