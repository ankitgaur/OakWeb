stateApp.factory('stateFactory',['$http','$log',function($http,$log){
	
	var stateFactory = {};
	

stateFactory.getStates = function(){
	  var url = 'http://localhost:6767/states';
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

stateFactory.getStateByID = function(stateID){
	  var url = 'http://localhost:6767/states';
	  url = url+"/"+stateID;
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

stateFactory.deleteStateByID = function(stateID){
	  var url = 'http://localhost:6767/states';
	  url = url+"/"+stateID;
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


stateFactory.createStates = function(stateData){
		var url = 'http://localhost:6767/states';
		var req = {
				method: 'POST',
				url: url,
				data:stateData
			}

	return $http(req).then(function success(response) {
			$log.debug('state created successfully ');			
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

stateFactory.updateStates = function(stateData,stateID){
		var url = 'http://localhost:6767/states';
		url = url+"/"+stateID;
		var req = {
				method: 'PUT',
				url: url,
				data:stateData
		   }
	
	return $http(req).then(function success(response) {
			$log.debug('state updated successfully ');
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

	return stateFactory;

}]);