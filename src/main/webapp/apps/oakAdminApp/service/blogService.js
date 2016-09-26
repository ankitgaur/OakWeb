oakAdminApp.factory('blogFactory',['$http','$log',function($http,$log){
	
var blogFactory = {};
	

blogFactory.getBlogs = function(){
	  var url = AppConfig.appUrl+'blogs';
	 
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

blogFactory.getBlogCategories = function(){
	
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


blogFactory.getBlogByID = function(blogCategoryID){
	  var url = AppConfig.appUrl+'blogs';
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

blogFactory.deleteBlogByID = function(blogCategoryID){
	  var url = AppConfig.appUrl+'blogs';
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


blogFactory.createBlog = function(bdata){
	var url = AppConfig.appUrl+'blogs';
	  
	$http.post(url, bdata, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
       })
    
       .success(function(){
    	   $log.debug('blog created successfully ');	
       })
    
       .error(function(){
    	   $log.debug('There is some issue while getting blog category from rest service');
       });
	
	};

blogFactory.updateBlog = function(blogCategoryData,blogCategoryID){
		var url = AppConfig.appUrl+'blogs';
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

	return blogFactory;

}]);