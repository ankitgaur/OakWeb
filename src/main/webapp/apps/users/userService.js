userApp.factory('userFactory',['$http','$log',function($http,$log){
	
	var userFactory = {};
	

userFactory.getUsers = function(){
	  var url = 'http://localhost:6767/users';
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

userFactory.getUserByID = function(userID){
	  var url = 'http://localhost:6767/users';
	  url = url+"/"+userID;
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

userFactory.deleteUserByID = function(userID){
	  var url = 'http://localhost:6767/users';
	  url = url+"/"+userID;
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


userFactory.createUsers = function(userData){
		var url = 'http://localhost:6767/users';
		var req = {
				method: 'POST',
				url: url,
				data:userData
			}

	return $http(req).then(function success(response) {
			$log.debug('user created successfully ');			
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

userFactory.updateUsers = function(userData,userID){
		var url = 'http://localhost:6767/users';
		url = url+"/"+userID;
		var req = {
				method: 'PUT',
				url: url,
				data:userData
		   }
	
	return $http(req).then(function success(response) {
			$log.debug('user updated successfully ');
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

	return userFactory;

}]);