oakAdminApp.factory('forumCategoriesFactory',['$http','$log',function($http,$log){
	
	var forumCategoryFactory = {};
	

forumCategoryFactory.getForumCategories = function(){
	  var url = AppConfig.appUrl+'forum_categories';
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		 }).then(function successCallback(response) {
			 return response.data;
	  }, function errorCallback(response) {
			$log.debug('There is some issue while getting forum category from rest service');
	  }); 
  
};

forumCategoryFactory.getForumCategoryByID = function(forumCategoryID){
	  var url = AppConfig.appUrl+'forum_categories';
	  url = url+"/"+forumCategoryID;
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		  }).then(function successCallback(response) {
			  return response.data;
	  }, function errorCallback(response) {
		  $log.debug('There is some issue while getting forum category from rest service');
	  }); 
  
};

forumCategoryFactory.deleteForumCategoryByID = function(forumCategoryID){
	  var url = AppConfig.appUrl+'forum_categories';
	  url = url+"/"+forumCategoryID;
	return $http({
		  method: 'DELETE',
		  url: url,
		  crossDomain:true
		  
	 }).then(function successCallback(response) {
		 return response.data;
	  }, function errorCallback(response) {
		  $log.debug('There is some issue while getting forum category from rest service');
	  }); 
  
};


forumCategoryFactory.createForumCategory = function(forumCategoryData){
		var url = AppConfig.appUrl+'forum_categories';
		return $http.post(url, forumCategoryData, {
	          transformRequest: angular.identity,
	          headers: {'Content-Type': undefined}
	       }).then(function success(response) {
			   return response.data;
				$log.debug('blog updated successfully ');
			},function error(response) {
				$log.debug('There is some issue while getting blog category from rest service');
		});
  
	
};

forumCategoryFactory.updateForumCategory = function(forumCategoryData,forumCategoryID){
		var url = AppConfig.appUrl+'forum_categories';
		url = url+"/"+forumCategoryID;
		var req = {
				method: 'PUT',
				url: url,
				data:forumCategoryData
		   };
	
	return $http(req).then(function success(response) {
			$log.debug('forum updated successfully ');
		},function error(response) {
			$log.debug('There is some issue while getting forum category from rest service');
	});
  
	
}

	return forumCategoryFactory;

}]);