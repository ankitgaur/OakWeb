oakAdminApp.controller('userCtrl',['$scope','$http','$stateParams','$log','userFactory','groupFactory', function($scope,$http,$stateParams,$log,userFactory,groupFactory) {
	$scope.users  = [];
	$scope.currentPage = 1;	
	$scope.pageSize = 10;
	$scope.userId = $stateParams.userID;
 
  getAllGroups();	
  getAllUsers();
  
  $scope.pageChangeHandler = function(num) {
	    console.log('going to page ' + num);
	  };
  $scope.getUserByID = function(email){
		var userID = email;
		
		userFactory.getUserByID(userID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.user = response;
				
				userGroups = {};
				if(response.groups){
					groups = response.groups.split(",");
					for(i=0;i<groups.length;i++){
						userGroups[groups[i].trim()] = true;
					}
				}
				
				$scope["userGroups"]=userGroups;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting users from rest service');
  });
}
	
	$scope.createUser = function(userFormObj){
		groups="";
		$( "input[name='groups[]']:checked" ).each(function() {
			  groups= groups + $( this ).val()+", ";
		});
		groups = groups.slice(0,-2);
		
		userFormObj.groups = groups;
		
		userFactory.createUsers(userFormObj)
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
		
		if($('#activated').is(':checked')) { 
			userFormObj.activated = true;
		}
		else{
			userFormObj.activated = false;
		}
		
		groups="";
		$( "input[name='groups[]']:checked" ).each(function() {
			  groups= groups + $( this ).val()+", ";
		});
		groups = groups.slice(0,-2);
		
		userFormObj.groups = groups;
		
		userFactory.updateUsers(userFormObj,userID)
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
	
	function getAllGroups(){
		
		groupFactory.getGroups().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {
					$scope.groups = response;
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting groups from rest service');
	  });
	}

	
}]);
