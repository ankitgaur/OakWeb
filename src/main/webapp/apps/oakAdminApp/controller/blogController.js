oakAdminApp.controller('blogCtrl',['$scope','$http','$stateParams','$log','blogsFactory', function($scope,$http,$stateParams,$log,blogsFactory) {

	$scope.blogs  = [];
	$scope.blogId = $stateParams.blogID;
  if($scope.blogId !="" && $scope.blogId !=undefined && $scope.blogId !='undefined'){
	 getBlogByID($scope.blogId); 
  }else{
	  getAllBlogs();
  }
  
  $scope.getBlogByID = function(category,updatedOn){
	  
		var blogID = category+"_"+updatedOn;
		blogsFactory.getBlogByID(blogID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.blog = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting blogs from rest service');
  });
}
	
	$scope.createBlog = function(blogFormObj){
		blogsFactory.createBlogs(this.blog)
				.then(function success(response) {
					getAllBlogs();
					clearBlogForm(blogFormObj);
					$('#createBlogsModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating blog');
	  }); 
	}
	$scope.updateBlog = function(category,updatedOn,blogFormObj){
		var blogID = category+"_"+updatedOn;
		blogsFactory.updateBlogs($scope.blog,blogID)
				.then(function successCallback(response) {
					getAllBlogs();
					clearBlogForm(blogFormObj);
				
				$('#updateBlogsModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  blog ');
	  });
	}
	
	$scope.deleteBlog= function(category,updatedOn){
		var blogID = category+"_"+updatedOn;
		blogsFactory.deleteBlogByID(blogID).then(function success(response) {
			$log.debug("blog deleted successfully");
			getAllBlogs();			
	  }, function error(response) {
			$log.debug('There is some issue while getting blogs from rest service');
	  });
	}
	$scope.resetForm = function(blogFormObj){
		clearBlogForm(blogFormObj);
	}
	
	function clearBlogForm(blogFormObj){
			blogFormObj.category=null;
			blogFormObj.createdBy=null;
			blogFormObj.title=null;
			blogFormObj.updatedBy=null;
			blogFormObj.updatedOn=null;
	}
	
	function getBlogByID(blogID){
		
		blogsFactory.getBlogByID(blogID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.blog = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting blogs from rest service');
  });
}
		
	function getAllBlogs(){
		
		blogsFactory.getBlogs().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {
					$scope.blogs = response;
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting blogs from rest service');
	  });
	}

	
}]);
