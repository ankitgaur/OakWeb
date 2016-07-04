oakAdminApp.controller('blogEntryCtrl',['$scope','$http','$stateParams','$log','blogEntriesFactory','blogFactory', function($scope,$http,$stateParams,$log,blogEntriesFactory,blogFactory) {
	$scope.currentPage = 1;	
	$scope.pageSize = 10;
	$scope.blogEntries  = [];
	$scope.blogEntryId = $stateParams.blogID;
  if($scope.blogEntryId !="" && $scope.blogEntryId !=undefined && $scope.blogEntryId !='undefined'){
	 getBlogByID($scope.blogEntryId); 
  }else{
	  getAllBlogs();
  }
  
  $scope.pageChangeHandler = function(num) {
	    console.log('going to page ' + num);
	  };
  
  $scope.getBlogByID = function(blogEntryID){
	  		
		blogEntriesFactory.getBlogByID(blogEntryID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.blogEntry = response;
				CKEDITOR.instances.editor2.setData(response.content);
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting blogEntries from rest service');
  });
}
	
	$scope.createBlog = function(blogFormObj){		
		blogFormObj.content = CKEDITOR.instances.editor1.getData();
		blogEntriesFactory.createBlogs(blogFormObj)
				.then(function success(response) {
									
					getAllBlogs();
					clearForm(blogFormObj);
					$('#createBlogModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  blogCategory');
	  }); 
	}
	
	$scope.updateBlog = function(blogEntryID,blogFormObj){
		blogFormObj.content = CKEDITOR.instances.editor2.getData();
		blogFormObj.blogname = $("#blogdd option:selected").text();
		blogEntriesFactory.updateBlogs($scope.blogEntry,blogEntryID)
				.then(function successCallback(response) {
					getAllBlogs();
					clearBlogForm(blogFormObj);
				
				$('#updateBlogsModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  blogEntry ');
	  });
	}
	
	$scope.deleteBlog= function(blogEntryID){
		
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
	
	$scope.setBlogName= function(){
		$scope.bname = $("#blogdd option:selected").text();
	}
	
	function clearBlogForm(blogFormObj){
			blogFormObj.blog=null;
			blogFormObj.createdBy=null;
			blogFormObj.title=null;
			blogFormObj.displayImage=null;
			blogFormObj.updatedBy=null;
			blogFormObj.updatedOn=null;
			CKEDITOR.instances.editor2.setData("Enter Text");
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
	  
	  
	  blogFactory.getBlogs().then(function success(response) {
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
