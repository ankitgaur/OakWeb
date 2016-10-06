oakAdminApp.factory('groupFactory',['$http','$log',function($http,$log){
	
var groupFactory = {};

groupFactory.getGroups = function(){
	  var url = AppConfig.appUrl+'groups';
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

groupFactory.getGroupByID = function(groupID){
	  var url = AppConfig.appUrl+'groups';
	  url = url+"/"+groupID;
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

groupFactory.deleteGroupByID = function(groupID){
	  var url = AppConfig.appUrl+'groups';
	  url = url+"/"+groupID;
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


groupFactory.createGroups = function(groupData){
		var url = AppConfig.appUrl+'groups';
		var req = {
				method: 'POST',
				url: url,
				data:groupData
			}

	return $http(req).then(function success(response) {
			$log.debug('group created successfully ');			
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

groupFactory.updateGroups = function(groupData,groupID){
		var url = AppConfig.appUrl+'groups';
		url = url+"/"+groupID;
		var req = {
				method: 'PUT',
				url: url,
				data:groupData
		   }
	
	return $http(req).then(function success(response) {
			$log.debug('group updated successfully ');
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

	return groupFactory;

}]);