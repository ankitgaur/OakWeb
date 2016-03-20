oakAdminApp.controller('blogEntryCtrl',['$scope','$http','$stateParams','$log','blogEntriesFactory', function($scope,$http,$stateParams,$log,blogEntriesFactory) {

	$scope.blogEntries  = [];
	$scope.blogEntryId = $stateParams.blogID;
  if($scope.blogEntryId !="" && $scope.blogEntryId !=undefined && $scope.blogEntryId !='undefined'){
	 getBlogByID($scope.blogEntryId); 
  }else{
	  getAllBlogs();
  }
  
  $scope.getBlogByID = function(category,updatedOn){
	  
		var blogEntryID = category+"_"+updatedOn;
		blogEntriesFactory.getBlogByID(blogEntryID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.blogEntry = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting blogEntries from rest service');
  });
}
	
	$scope.createBlog = function(blogFormObj){
		blogFormObj.content = CKEDITOR.instances.editor1.getData();
		blogEntriesFactory.createBlogs(this.blogEntry)
				.then(function success(response) {
					getAllBlogs();
					clearBlogForm(blogFormObj);
					$('#createBlogsModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating blogEntry');
	  }); 
	}
	$scope.updateBlog = function(category,updatedOn,blogFormObj){
		var blogEntryID = category+"_"+updatedOn;
		blogEntriesFactory.updateBlogs($scope.blogEntry,blogEntryID)
				.then(function successCallback(response) {
					getAllBlogs();
					clearBlogForm(blogFormObj);
				
				$('#updateBlogsModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  blogEntry ');
	  });
	}
	
	$scope.deleteBlog= function(category,updatedOn){
		var blogEntryID = category+"_"+updatedOn;
		blogEntriesFactory.deleteBlogByID(blogEntryID).then(function success(response) {
			$log.debug("blogEntry deleted successfully");
			getAllBlogs();			
	  }, function error(response) {
			$log.debug('There is some issue while getting blogEntries from rest service');
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
	
	function getBlogByID(blogEntryID){
		
		blogEntriesFactory.getBlogByID(blogEntryID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.blogEntry = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting blogEntries from rest service');
  });
}
		
	function getAllBlogs(){
		
		blogEntriesFactory.getBlogs().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {
					$scope.blogEntries = response;
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting blogEntries from rest service');
	  });
	}

	
}]);
