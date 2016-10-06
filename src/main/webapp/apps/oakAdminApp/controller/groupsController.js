oakAdminApp.controller('groupsCtrl',['$scope','$http','$stateParams','$log','groupFactory', 'roleFactory', function($scope,$http,$stateParams,$log,groupFactory,roleFactory) {
	$scope.groups  = [];
	$scope.currentPage = 1;	
	$scope.pageSize = 10;
	$scope.groupId = $stateParams.groupID;
 
	getAllGroups();
	getAllRoles();
  
  $scope.pageChangeHandler = function(num) {
	    console.log('going to page ' + num);
	  };
  $scope.getGroupByID = function(email){
		var groupID = email;
		
		groupFactory.getGroupByID(groupID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.group = response;
				
				groupRoles = {};
				if(response.roles){
					roles = response.roles.split(",");
					for(i=0;i<roles.length;i++){
						groupRoles[roles[i].trim()] = true;
					}
				}
				
				$scope["groupRoles"]=groupRoles;
				
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting groups from rest service');
  });
}
	
	$scope.createGroup = function(groupFormObj){
		roles="";
		$( "input[name='roles[]']:checked" ).each(function() {
			  roles= roles + $( this ).val()+", ";
		});
		
		roles = roles.slice(0,-2);
		
		groupFormObj.roles = roles;
		groupFactory.createGroups(groupFormObj)
				.then(function success(response) {
									
					getAllGroups();
					clearGroupForm(groupFormObj);
					$('#createGroupModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  group ');
	  }); 
	}
	$scope.updateGroup = function(groupFormObj,groupID){
		roles="";
		$( "input[name='roles[]']:checked" ).each(function() {
			  roles= roles + $( this ).val()+", ";
		});
		roles = roles.slice(0,-2);
		
		groupFormObj.roles = roles;
		groupFactory.updateGroups(groupFormObj,groupID)
				.then(function successCallback(response) {
					getAllGroups();
					clearGroupForm(groupFormObj);				
				$('#updateGroupModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  group ');
	  });
	}
	
	$scope.deleteGroup= function(email){
		var groupID = email;
		groupFactory.deleteGroupByID(groupID).then(function success(response) {
			$log.debug("group deleted successfully");
			getAllGroups();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting groups from rest service');
	  });
	}
	$scope.resetForm = function(groupFormObj){
		clearGroupForm(groupFormObj);
	}
	
	function clearGroupForm(groupFormObj){
			
			groupFormObj.name=null;
			groupFormObj.roles=null;
	}
	
	function getGroupByID(groupID){
		
		groupFactory.getGroupByID(groupID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.group = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting groups from rest service');
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
