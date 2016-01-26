oakHomeApp.factory('oakHomeFactory',['$http','$log',function($http,$log){
	
var oakHomeFactory = {};
	
oakHomeFactory.getPlacementImgByID = function(placementID){
	  var url = AppConfig.appUrl+'placements';
	  url = url+"/"+placementID;
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

oakHomeFactory.getTopStories = function(){
	  var url = AppConfig.appUrl+'placements/section/topstories';
	  
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

oakHomeFactory.getTopMid = function(){
	  var url = AppConfig.appUrl+'placements/section/topmid';
	  
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

oakHomeFactory.getTopLeft = function(){
	  var url = AppConfig.appUrl+'placements/section/topleft';
	  
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

	return oakHomeFactory;

}]);
