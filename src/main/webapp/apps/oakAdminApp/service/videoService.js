oakAdminApp.factory('videoFactory',['$http','$log',function($http,$log){
	
	var videoFactory = {};
	

videoFactory.getVideos = function(){
	  var url = AppConfig.appUrl+'videos';
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		 }).then(function successCallback(response) {
			 return response.data;
	  }, function errorCallback(response) {
			$log.debug('There is some issue while getting data from rest service');
	  }); 
  
};

videoFactory.getVideoByID = function(videoID){
	  var url = AppConfig.appUrl+'videos';
	  url = url+"/"+videoID;
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		  }).then(function successCallback(response) {
			  return response.data;
	  }, function errorCallback(response) {
		$log.debug('There is some issue while getting data from rest service');
	  }); 
  
};

videoFactory.deleteVideoByID = function(videoID){
	  var url = AppConfig.appUrl+'videos';
	  url = url+"/"+videoID;
	return $http({
		  method: 'DELETE',
		  url: url,
		  crossDomain:true
		  
	 }).then(function successCallback(response) {
		 return response.data;
	  }, function errorCallback(response) {
			$log.debug('There is some issue while getting data from rest service');
	  }); 
  
};


videoFactory.createVideos = function(videoData){
		var url = AppConfig.appUrl+'videos';
		var req = {
				method: 'POST',
				url: url,
				data:videoData
			};

	return $http(req).then(function success(response) {
			$log.debug('video created successfully ');			
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
};

videoFactory.updateVideos = function(videoData,videoID){
		var url = AppConfig.appUrl+'videos';
		url = url+"/"+videoID;
		var req = {
				method: 'PUT',
				url: url,
				data:videoData
		   };
	
	return $http(req).then(function success(response) {
			$log.debug('video updated successfully ');
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
};

	return videoFactory;

}]);