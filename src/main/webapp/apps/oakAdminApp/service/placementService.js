oakAdminApp.factory('placementFactory',['$http','$log',function($http,$log){
	
	var placementFactory = {};
	

placementFactory.getPlacements = function(){
	  var url = AppConfig.appUrl+'placements';
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

placementFactory.getPlacementByID = function(placementID){
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
  
}

placementFactory.deletePlacementByID = function(placementID){
	  var url = AppConfig.appUrl+'placements';
	  url = url+"/"+placementID;
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


placementFactory.createPlacement = function(placementData){
		var url = AppConfig.appUrl+'placements';
		return $http.post(url, placementData, {
	          transformRequest: angular.identity,
	          headers: {'Content-Type': undefined}
	       }).then(function success(response) {
			   return response.data;
				$log.debug('blog updated successfully ');
			},function error(response) {
				$log.debug('There is some issue while getting blog category from rest service');
		});
  
	
}

placementFactory.updatePlacement = function(placementData,placementID){
		var url = AppConfig.appUrl+'placements';
		url = url+"/"+placementID;
		var req = {
				method: 'PUT',
				url: url,
				data:placementData
		   }
	
	return $http(req).then(function success(response) {
			$log.debug('placement updated successfully ');
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

	return placementFactory;

}]);