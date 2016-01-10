userApp.controller('userDetailCtrl',['$scope','$http','$stateParams','$log','userFactory', function($scope,$http,$stateParams,$log,userFactory) {

	$scope.users  = [];
	$scope.userId = $stateParams.userID;
  if($scope.userId !="" && $scope.userId !=undefined && $scope.userId !='undefined'){
	 getUserByID($scope.userId); 
  }else{
	  getAllUsers();
  }
  
  $scope.getUserByID = function(email){
		var userID = email;
		
		userFactory.getUserByID(userID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.user = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting users from rest service');
  });
}
	
	$scope.createUser = function(userFormObj){
		userFactory.createUsers(this.user)
				.then(function success(response) {
									
					getAllUsers();
					clearUserForm(userFormObj);
					$('#createUserModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  user ');
	  }); 
	}
	$scope.updateUser = function(email,userFormObj){
		var userID = email;
		userFactory.updateUsers($scope.user,userID)
				.then(function successCallback(response) {
					getAllUsers();
					clearUserForm(userFormObj);				
				$('#updateUserModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  user ');
	  });
	}
	
	$scope.deleteUser= function(email){
		var userID = email;
		userFactory.deleteUserByID(userID).then(function success(response) {
			$log.debug("user deleted successfully");
			getAllUsers();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting users from rest service');
	  });
	}
	$scope.resetForm = function(userFormObj){
		clearUserForm(userFormObj);
	}
	
	function clearUserForm(userFormObj){
			userFormObj.email=null;
			userFormObj.name=null;
			userFormObj.username=null;
			userFormObj.password=null;
			userFormObj.groups=null;
			userFormObj.activated=null;
			userFormObj.forgotpassword=null;
			userFormObj.sendemail=null;
			userFormObj.updatedby=null;
			userFormObj.createdby=null;
	}
	
	function getUserByID(userID){
		
		userFactory.getUserByID(userID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.user = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting users from rest service');
  });
}
		
	function getAllUsers(){
		
		userFactory.getUsers().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {
					$scope.users = response;
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting users from rest service');
	  });
	}

	
}]);
