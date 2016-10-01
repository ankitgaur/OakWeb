oakAdminApp.controller('blogCtrl',['$scope','$http','$stateParams','$log','blogFactory', function($scope,$http,$stateParams,$log,blogFactory) {

	$scope.currentPage = 1;	
	$scope.pageSize = 10;
	$scope.blogs  = [];
	$scope.blogId = $stateParams.blogId;
  if($scope.blogId !="" && $scope.blogId !=undefined && $scope.blogId !='undefined'){
	  getBlogByID($scope.blogId); 
  }else{
	  getAllBlogs();
  }
  
 $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
  
  $scope.getBlogByID = function(blogId){
				
		blogFactory.getBlogByID(blogId).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.blog = response;	
				console.log('$scope.blog :::: '+JSON.stringify($scope.blog));
				
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting blogs from rest service');
  });
  
 	getAllBlogs();
  
}
	
	$scope.createBlog = function(blogFormObj){
		var file =  $("#displayImage").get(0).files[0];
		var bdata = new FormData();
		
		bdata.append('category','ip2n');
		bdata.append('title',blogFormObj.title);
		bdata.append('description',blogFormObj.description);
		bdata.append('displayImage', file);
		
		blogFactory.createBlog(bdata).then(function success(response) {
					getAllBlogs();
					clearForm(blogFormObj);
					$('#createBlogModal').modal('hide');
			$log.debug('blog created successfully ');
		},function error(response) {
			$log.debug('There is some issue while getting blog category from rest service');
	});
	}
	$scope.updateBlog = function(blogId,blogFormObj){
					
		blogFactory.updateBlog($scope.blog,blogId)
				.then(function successCallback(response) {
					getAllBlogs();
					clearForm(blogFormObj);
				
				$('#updateBlogModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while updating  blogCategory ');
	  });
	}
	
	$scope.deleteBlogById = function(blogId){
		
		blogFactory.deleteBlogByID(blogId).then(function success(response) {
			$log.debug("blogCategory deleted successfully : " + getAllBlogs());
			getAllBlogs();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting blogs from rest service');
	  });
	}
	$scope.resetForm = function(blogFormObj){
		clearForm(blogFormObj);
	}
	
	function clearForm(blogFormObj){
		blogFormObj.rating=null;
		blogFormObj.hits=null;
		blogFormObj.description=null;
		blogFormObj.displayimage=null;		
	}
	
	function getBlogByID(blogId){
		
		blogFactory.getBlogByID(blogId).then(function success(response) {
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
		
		blogFactory.getBlogs().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {						
					$scope.blogs = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting blogs from rest service');
	  });
	  
	  blogFactory.getBlogCategories().then(function success(response) {
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
