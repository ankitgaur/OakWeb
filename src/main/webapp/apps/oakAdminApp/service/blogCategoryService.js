oakAdminApp.factory('blogCategoryFactory',['$http','$log',function($http,$log){
	
	var blogCategoryFactory = {};
	

blogCategoryFactory.getBlogCategories = function(){
	  var url = AppConfig.appUrl+'blog_categories';
	 
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		 }).then(function successCallback(response) {
			 return response.data;
	  }, function errorCallback(response) {
			$log.debug('There is some issue while getting blog category from rest service');
	  }); 
  
};

blogCategoryFactory.getBlogCategoryByID = function(blogCategoryID){
	  var url = AppConfig.appUrl+'blog_categories';
	  url = url+"/"+blogCategoryID;
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		  }).then(function successCallback(response) {
			  return response.data;
	  }, function errorCallback(response) {
		  $log.debug('There is some issue while getting blog category from rest service');
	  }); 
  
};

blogCategoryFactory.deleteBlogCategoryByID = function(blogCategoryID){
	  var url = AppConfig.appUrl+'blog_categories';
	  url = url+"/"+blogCategoryID;
	return $http({
		  method: 'DELETE',
		  url: url,
		  crossDomain:true
		  
	 }).then(function successCallback(response) {
		 return response.data;
	  }, function errorCallback(response) {
		  $log.debug('There is some issue while getting blog category from rest service');
	  }); 
  
};


blogCategoryFactory.createBlogCategory = function(blogCategoryData){
		var url = AppConfig.appUrl+'blog_categories';
		var req = {
				method: 'POST',
				url: url,
				data:blogCategoryData
			};

	return $http(req).then(function success(response) {
			$log.debug('blog created successfully ');			
		},function error(response) {
			$log.debug('There is some issue while getting blog category from rest service');
	});
  
	
};

blogCategoryFactory.updateBlogCategory = function(blogCategoryData,blogCategoryID){
		var url = AppConfig.appUrl+'blog_categories';
		url = url+"/"+blogCategoryID;
		var req = {
				method: 'PUT',
				url: url,
				data:blogCategoryData
		   };
	
	return $http(req).then(function success(response) {
			$log.debug('blog updated successfully ');
		},function error(response) {
			$log.debug('There is some issue while getting blog category from rest service');
	});
  
	
}

	return blogCategoryFactory;

}]);