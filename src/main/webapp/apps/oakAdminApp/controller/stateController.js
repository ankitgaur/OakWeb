oakAdminApp.controller('stateCtrl',['$scope','$compile','$http','$stateParams','$log','stateFactory', function($scope,$compile,$http,$stateParams,$log,stateFactory) {

	$scope.states  = [];	
	$scope.stateId = $stateParams.stateID;
  if($scope.stateId !="" && $scope.stateId !=undefined && $scope.stateId !='undefined'){
	 getStateByID($scope.stateId); 
  }else{
	  getAllStates();
  }
  
  $scope.getStateByID = function(id){
		var stateID = id;
		
		stateFactory.getStateByID(stateID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.state = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting states from rest service');
  });
};
	
	$scope.createState = function(stateFormObj){
		
		temp = [];
		$(".govtarr").each(function(){
			console.log(this.value);
			if(this.value.trim()){
				temp.push(this.value);
			}
			
		});
		
		this.state.govts = temp;
		
		stateFactory.createStates(this.state)
				.then(function success(response) {
									
					getAllStates();
					clearStateForm(stateFormObj);
					$('#createStateModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  state ');
	  }); 
	};
	$scope.updateState = function(id,stateFormObj){
		var stateID = id;
		stateFactory.updateStates($scope.state,stateID)
				.then(function successCallback(response) {
					getAllStates();
					clearStateForm(stateFormObj);				
				$('#updateStateModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  state ');
	  });
	};
	
	$scope.deleteState= function(id){
		var stateID = id;
		stateFactory.deleteStateByID(stateID).then(function success(response) {
			$log.debug("state deleted successfully");
			getAllStates();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting states from rest service');
	  });
	};
	$scope.resetForm = function(stateFormObj){
		clearStateForm(stateFormObj);
	};
	
	function clearStateForm(stateFormObj){
			
		stateFormObj.name=null;
		stateFormObj.abbr=null;
		stateFormObj.createdby=null;
		stateFormObj.updatedby=null;
		stateFormObj.currGovt=null;		
	}
	
	function getStateByID(stateID){
		
		stateFactory.getStateByID(stateID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.state = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting states from rest service');
  });
}
		
	function getAllStates(){
		
		stateFactory.getStates().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {
					$scope.states = response;
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting states from rest service');
	  });
	}

	$scope.deleteGovt = function($evnt){
		$evnt.target.parentElement.parentElement.remove();
	};
	
	$scope.addGovt = function(){
		var elem = $( ".govtTemplate" )[0];
		var clone = $(elem).clone();
		clone.removeClass("hidden");
		clone.removeClass("govtTemplate");
		var temp = $compile(clone)($scope);
		$(temp).appendTo('#govtlist');
	};
	
	
	
}]);
