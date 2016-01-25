oakAdminApp.factory('blogsFactory',['$http','$log',function($http,$log){
	
var blogsFactory = {};

blogsFactory.getBlogs = function(){
	  var url = AppConfig.appUrl+'blogs';
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		 }).then(function successCallback(response) {
			 return response.data;
	  }, function errorCallback(response) {
			$log.debug('There is some issue while getting data from rest service');
	  }); 
  
}

blogsFactory.getBlogByID = function(blogID){
	  var url = AppConfig.appUrl+'blogs';
	  url = url+"/"+blogID;
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		  }).then(function successCallback(response) {
			  return response.data;
	  }, function errorCallback(response) {
		$log.debug('There is some issue while getting data from rest service');
	  }); 
  
}

blogsFactory.deleteBlogByID = function(blogID){
	  var url = AppConfig.appUrl+'blogs';
	  url = url+"/"+blogID;
	return $http({
		  method: 'DELETE',
		  url: url,
		  crossDomain:true
		  
	 }).then(function successCallback(response) {
		 return response.data;
	  }, function errorCallback(response) {
			$log.debug('There is some issue while getting data from rest service');
	  }); 
  
}


blogsFactory.createBlogs = function(blogData){
		var url = AppConfig.appUrl+'blogs';
		var req = {
				method: 'POST',
				url: url,
				data:blogData
			}

	return $http(req).then(function success(response) {
			$log.debug('blog created successfully ');			
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});	
}

blogsFactory.updateBlogs = function(blogData,blogID){
		var url = AppConfig.appUrl+'blogs';
		url = url+"/"+blogID;
		var req = {
				method: 'PUT',
				url: url,
				data:blogData
		   }
	
	return $http(req).then(function success(response) {
			$log.debug('blog updated successfully ');
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

	return blogsFactory;

}]);