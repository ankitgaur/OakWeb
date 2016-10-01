oakAdminApp.factory('forumTopicFactory',['$http','$log',function($http,$log){
	
	var forumTopicFactory = {};
	

forumTopicFactory.getForumTopics = function(){
	  var url = AppConfig.appUrl+'forum_topics';
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

forumTopicFactory.getForumTopicByID = function(forumTopicID){
	  var url = AppConfig.appUrl+'forum_topics';
	  url = url+"/"+forumTopicID;
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

forumTopicFactory.deleteForumTopicByID = function(forumTopicID){
	  var url = AppConfig.appUrl+'forum_topics';
	  url = url+"/"+forumTopicID;
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


forumTopicFactory.createForumTopic = function(forumTopicData){
		var url = AppConfig.appUrl+'forum_topics';
		return $http.post(url, forumTopicData, {
	          transformRequest: angular.identity,
	          headers: {'Content-Type': undefined}
	       }).then(function success(response) {
			   return response.data;
				$log.debug('blog updated successfully ');
			},function error(response) {
				$log.debug('There is some issue while getting blog category from rest service');
		});
  
	
}

forumTopicFactory.updateForumTopic = function(forumTopicData,forumTopicID){
		var url = AppConfig.appUrl+'forum_topics';
		url = url+"/"+forumTopicID;
		var req = {
				method: 'PUT',
				url: url,
				data:forumTopicData
		   }
	
	return $http(req).then(function success(response) {
			$log.debug('forumTopic updated successfully');
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

	return forumTopicFactory;

}]);