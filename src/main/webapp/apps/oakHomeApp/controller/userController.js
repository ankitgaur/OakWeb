oakHomeApp.controller('userCtrl',['$scope','$http','$stateParams','$log','userFactory', function($scope,$http,$stateParams,$log,userFactory) {
	
	$scope.createUser = function(userFormObj){
		userFactory.createUsers(this.user)
				.then(function success(response) {
					$('#Signup').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while creating  user');
	  }); 
	}
	
}]);
