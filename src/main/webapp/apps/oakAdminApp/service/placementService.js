oakAdminApp.factory('placementFactory',['$http','$log',function($http,$log){
	
	var placementFactory = {};
	

placementFactory.getPlacements = function(){
	  var url = 'http://localhost:6767/placements';
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
	  var url = 'http://localhost:6767/placements';
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
	  var url = 'http://localhost:6767/placements';
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
		var url = 'http://localhost:6767/placements';
		var req = {
				method: 'POST',
				url: url,
				data:placementData
			}

	return $http(req).then(function success(response) {
			$log.debug('placement created successfully ');			
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

placementFactory.updatePlacement = function(placementData,placementID){
		var url = 'http://localhost:6767/placements';
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