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
		showSuccessAlert("Please check your mailbox for an Activation mail.");			
		},function error(response) {
			showErrorAlert('There was some issue while creating  user');
	});
  
}

userFactory.login = function(user){
	var url = AppConfig.appUrl+'login';
	var key = btoa(user.id + ":" + user.password);
	AppConfig.key = key;
	var req = {
			method: 'POST',
			url: url,
			headers : {			          
			      Authorization: 'Basic '+ key
			 }
		}

return $http(req).then(function success(response) {
	    showSuccessAlert("You were able to log in successfully.");	
		return response.data;
	},function error(response) {		
		showErrorAlert("Please enter a valid username and password. Please activate your account if you have not done that already.");
});

}

	return userFactory;

}]);