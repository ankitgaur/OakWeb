oakAdminApp.controller('placementCtrl',['$scope','$http','$stateParams','$log','placementFactory', function($scope,$http,$stateParams,$log,placementFactory) {

	$scope.currentPage = 1;	
	$scope.pageSize = 10;
	$scope.placements  = [];
	$scope.placementId = $stateParams.placementID;
  if($scope.placementId !="" && $scope.placementId !=undefined && $scope.placementId !='undefined'){
	 getPlacementByID($scope.placementId); 
  }else{
	  getAllPlacements();
  }
  $scope.pageChangeHandler = function(num) {
	    console.log('going to page ' + num);
	  };
  $scope.getPlacementByID = function(placementID){
				
		placementFactory.getPlacementByID(placementID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.placement = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting placements from rest service');
  });
}
	
	$scope.createPlacement = function(placementFormObj){
		
		var file =  $("#image").get(0).files[0];
		var bdata = new FormData();
		
		bdata.append('page',placementFormObj.page);
		bdata.append('section',placementFormObj.section);
		bdata.append('position',placementFormObj.position);
		bdata.append('title',placementFormObj.title);
		bdata.append('link',placementFormObj.link);
		bdata.append('intro',placementFormObj.intro);
		bdata.append('displayImage', file);
		
			
		placementFactory.createPlacement(bdata)
				.then(function success(response) {
									
					getAllPlacements();
					clearPlacementForm(placementFormObj);
					$('#createPlacementModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  placement ');
	  }); 
	}
	$scope.updatePlacement = function(id,placementFormObj){
		var placementID = id;
		placementFactory.updatePlacement($scope.placement,placementID)
				.then(function successCallback(response) {
					getAllPlacements();
					clearPlacementForm(placementFormObj);				
				$('#updatePlacementModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  placement ');
	  });
	}
	
	$scope.deletePlacement= function(id){
		var placementID = id;
		placementFactory.deletePlacementByID(placementID).then(function success(response) {
			$log.debug("placement deleted successfully");
			getAllPlacements();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting placements from rest service');
	  });
	}
	$scope.resetForm = function(placementFormObj){
		clearplacementForm(placementFormObj);
	}
	
	function clearPlacementForm(placementFormObj){
			
		placementFormObj.page=null;
		placementFormObj.section=null;
		placementFormObj.position=null;
		placementFormObj.title=null;
		placementFormObj.img=null;
		placementFormObj.link=null;
		placementFormObj.intro=null;
	}
	
	function getPlacementByID(placementID){
		
		placementFactory.getPlacementByID(placementID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.placement = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting placements from rest service');
  });
}
		
	function getAllPlacements(){
		
		placementFactory.getPlacements().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {
					$scope.placements = response;
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting placements from rest service');
	  });
	}

	
}]);
