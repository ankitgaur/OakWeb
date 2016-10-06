oakAdminApp.controller('rolesCtrl',['$scope','$http','$stateParams','$log','roleFactory', function($scope,$http,$stateParams,$log,roleFactory) {
	$scope.roles  = [];
	$scope.currentPage = 1;	
	$scope.pageSize = 10;
	$scope.roleId = $stateParams.roleID;
	
	getAllRoles();
  
  $scope.pageChangeHandler = function(num) {
	    console.log('going to page ' + num);
	  };
  $scope.getRoleByID = function(email){
		var roleID = email;
		
		roleFactory.getRoleByID(roleID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.role = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting roles from rest service');
  });
}
	
	$scope.createRole = function(roleFormObj){
		roleFactory.createRoles(this.role)
				.then(function success(response) {
									
					getAllRoles();
					clearRoleForm(roleFormObj);
					$('#createRoleModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  role ');
	  }); 
	}
	$scope.updateRole = function(email,roleFormObj){
		var roleID = email;
		roleFactory.updateRoles($scope.role,roleID)
				.then(function successCallback(response) {
					getAllRoles();
					clearRoleForm(roleFormObj);				
				$('#updateRoleModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  role ');
	  });
	}
	
	$scope.deleteRole= function(email){
		var roleID = email;
		roleFactory.deleteRoleByID(roleID).then(function success(response) {
			$log.debug("role deleted successfully");
			getAllRoles();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting roles from rest service');
	  });
	}
	$scope.resetForm = function(roleFormObj){
		clearRoleForm(roleFormObj);
	}
	
	function clearRoleForm(roleFormObj){
			roleFormObj.name=null;
	}
	
	function getRoleByID(roleID){
		
		roleFactory.getRoleByID(roleID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.role = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting roles from rest service');
  });
}
		
	function getAllRoles(){
		
		roleFactory.getRoles().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {
					$scope.roles = response;
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting roles from rest service');
	  });
	}

	
}]);
