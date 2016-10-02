oakAdminApp.factory('blogEntriesFactory',['$http','$log',function($http,$log){
	
var blogEntriesFactory = {};

blogEntriesFactory.getBlogs = function(){
	  var url = AppConfig.appUrl+'blog_entries';
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

blogEntriesFactory.getBlogByID = function(blogID){
	  var url = AppConfig.appUrl+'blog_entries';
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

blogEntriesFactory.deleteBlogByID = function(blogID){
	  var url = AppConfig.appUrl+'blog_entries';
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

blogEntriesFactory.createBlogs = function(bdata) {
	var url = AppConfig.appUrl + 'blog_entries';
	$http.post(url, bdata, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
       })
    
       .success(function(){
    	   showSuccessAlert("Blog Post was created successfully.");	
       })
    
       .error(function(){
    	   showErrorAlert('There were some issues while creating your blog post. Please contact your System Administrator');
       });
};

blogEntriesFactory.updateBlogs = function(blogData,blogID){
		var url = AppConfig.appUrl+'blog_entries';
		url = url+"/"+blogID;
		var req = {
				method: 'PUT',
				url: url,
				data:blogData
		   }
	
	return $http(req).then(function success(response) {
			$log.debug('blog entry updated successfully ');
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

	return blogEntriesFactory;

}]);