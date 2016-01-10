oakAdminApp.factory('incidentFactory',['$http','$log',function($http,$log){
	
	var incidentFactory = {};
	

incidentFactory.getIncidents = function(){
	  var url = 'http://localhost:6767/incidents';
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

incidentFactory.getIncidentByID = function(incidentID){
	  var url = 'http://localhost:6767/incidents';
	  url = url+"/"+incidentID;
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

incidentFactory.deleteIncidentByID = function(incidentID){
	  var url = 'http://localhost:6767/incidents';
	  url = url+"/"+incidentID;
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


incidentFactory.createIncidents = function(incidentData){
		var url = 'http://localhost:6767/incidents';
		var req = {
				method: 'POST',
				url: url,
				data:incidentData
			}

	return $http(req).then(function success(response) {
			$log.debug('Incident created successfully ');			
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

incidentFactory.updateIncidents = function(incidentData,incidentID){
		var url = 'http://localhost:6767/incidents';
		url = url+"/"+incidentID;
		var req = {
				method: 'PUT',
				url: url,
				data:incidentData
		   }
	
	return $http(req).then(function success(response) {
			$log.debug('Incident updated successfully ');
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
}

	return incidentFactory;

}]);