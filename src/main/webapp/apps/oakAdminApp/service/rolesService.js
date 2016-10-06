oakAdminApp.factory('roleFactory',['$http','$log',function($http,$log){
	
var roleFactory = {};

roleFactory.getRoles = function(){
	  var url = AppConfig.appUrl+'roles';
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

roleFactory.getRoleByID = function(roleID){
	  var url = AppConfig.appUrl+'roles';
	  url = url+"/"+roleID;
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

roleFactory.deleteRoleByID = function(roleID){
	  var url = AppConfig.appUrl+'roles';
	  url = url+"/"+roleID;
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


roleFactory.createRoles = function(roleData){
		var url = AppConfig.appUrl+'roles';
		var req = {
				method: 'POST',
				url: url,
				data:roleData
			}

	return $http(req).then(function success(response) {
			$log.debug('role created successfully ');			
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

roleFactory.updateRoles = function(roleData,roleID){
		var url = AppConfig.appUrl+'roles';
		url = url+"/"+roleID;
		var req = {
				method: 'PUT',
				url: url,
				data:roleData
		   }
	
	return $http(req).then(function success(response) {
			$log.debug('role updated successfully ');
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

	return roleFactory;

}]);