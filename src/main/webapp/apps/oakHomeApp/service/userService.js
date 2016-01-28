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

	return userFactory;

}]);