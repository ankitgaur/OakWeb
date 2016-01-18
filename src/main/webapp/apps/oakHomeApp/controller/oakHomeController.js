oakHomeApp.controller('oakHomeCtrl',['$scope','$http','$stateParams','$log','oakHomeFactory', function($scope,$http,$stateParams,$log,oakHomeFactory) {
  var id="";
  getPlacementByID(id);
  function getPlacementByID(id){
		var placementID = id;
		
		
		oakHomeFactory.getPlacementImgByID(placementID).then(function success(response) {
			
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.placement = response;
				$scope.testPlacement ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};
				
			});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting states from rest service');
  });
}
	
	
}]);
