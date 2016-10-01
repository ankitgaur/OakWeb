oakAdminApp.factory('forumPostFactory',['$http','$log',function($http,$log){
	
var forumPostFactory = {};
	

forumPostFactory.getForumPosts = function(){
	  var url = AppConfig.appUrl+'forum_post';
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

forumPostFactory.getForumPostByID = function(forumPostID){
	  var url = AppConfig.appUrl+'forum_post';
	  url = url+"/"+forumPostID;
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

forumPostFactory.deleteForumPostByID = function(forumPostID){
	  var url = AppConfig.appUrl+'forum_post';
	  url = url+"/"+forumPostID;
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


forumPostFactory.createForumPosts = function(ForumPostData){
		var url = AppConfig.appUrl+'forum_post';
		return $http.post(url, ForumPostData, {
	          transformRequest: angular.identity,
	          headers: {'Content-Type': undefined}
	       }).then(function success(response) {
			   return response.data;
				$log.debug('blog updated successfully ');
			},function error(response) {
				$log.debug('There is some issue while getting blog category from rest service');
		});
}

forumPostFactory.updateForumPosts = function(ForumPostData,forumPostID){
		var url = AppConfig.appUrl+'forum_post';
		url = url+"/"+forumPostID;
		var req = {
				method: 'PUT',
				url: url,
				data:ForumPostData
		   }
	
	return $http(req).then(function success(response) {
			$log.debug('article updated successfully ');
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

	return forumPostFactory;

}]);