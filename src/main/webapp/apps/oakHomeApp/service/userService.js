oakHomeApp.factory('userFactory',['$http','$log',function($http,$log){
	
var userFactory = {};


userFactory.createUsers = function(userData){
		var url = AppConfig.appUrl+'users';
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

userFactory.login = function(user){
	var url = AppConfig.appUrl+'login';
	var key = btoa(user.id + ":" + user.password);
	var req = {
			method: 'POST',
			url: url,
			headers : {			          
			      Authorization: 'Basic '+ key
			 }
		}

return $http(req).then(function success(response) {
		$log.debug('user successfully logged in ');	
		return response.data;
	},function error(response) {		
	$log.debug('user unable to log in');
});

}

	return userFactory;

}]);