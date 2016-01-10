oakAdminApp.controller('incidentCtrl',['$scope','$http','$stateParams','$log','incidentFactory', function($scope,$http,$stateParams,$log,incidentFactory) {

	$scope.incidents  = [];
	$scope.incidentId = $stateParams.incidentID;
  if($scope.incidentId !="" && $scope.incidentId !=undefined && $scope.incidentId !='undefined'){
	 getIncidentByID($scope.incidentId); 
  }else{
	  getAllIncidents();
  }
  
  $scope.getIncidentByID = function(incidentID){
		incidentFactory.getIncidentByID(incidentID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.incident = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting incidents from rest service');
  });
}
	
	$scope.createIncident = function(incidentFormObj){
		incidentFactory.createIncidents(this.incident)
				.then(function success(response) {
				
					getAllIncidents();
					clearIncidentForm(incidentFormObj);
					$('#createIncidentModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  incident ');
	  }); 
	}
	$scope.updateIncident = function(incidentID,incidentFormObj){
		console.log($scope.incident);
		incidentFactory.updateIncidents($scope.incident,incidentID)
				.then(function successCallback(response) {
					getAllIncidents();
					clearIncidentForm(incidentFormObj);
				 $('#updateIncidentModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  incident ');
	  });
	}
	
	$scope.deleteIncident= function(incidentID){
		
		incidentFactory.deleteIncidentByID(incidentID).then(function success(response) {
			$log.debug("incident deleted successfully");
			getAllIncidents();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting incidents from rest service');
	  });
	}
	$scope.resetForm = function(incidentFormObj){
		clearIncidentForm(incidentFormObj);
	}
	
	function clearIncidentForm(incidentFormObj){
			incidentFormObj.state=null;
			incidentFormObj.id=null;
			incidentFormObj.type=null;
			incidentFormObj.createdBy=null;
			
	}
	
	function getIncidentByID(incidentID){
		
		incidentFactory.getIncidentByID(incidentID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.incident = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting incidents from rest service');
  });
}
		
	function getAllIncidents(){
		
		incidentFactory.getIncidents().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {
					$scope.incidents = response;
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting incidents from rest service');
	  });
	}

	
}]);
