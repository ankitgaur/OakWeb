oakHomeApp.controller('oakHomeCtrl',['$scope','$http','$stateParams','$log','oakHomeFactory','ngDialog', 
                                     function($scope,$http,$stateParams,$log,oakHomeFactory,ngDialog) {
  var id="topmain_1";
  getPlacementByID(id);
  getTopStories();
  getTopMid();
  getTopLeft();
  getHomeAds();
  getHomeSlider();
  
  function getPlacementByID(id){
		var placementID = id;
		
		
		oakHomeFactory.getPlacementImgByID(placementID).then(function success(response) {
			
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.placement = response;
				//$log.debug(response);
				//$scope.testPlacement ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};
				
			});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting states from rest service');
  });
}
  
  function getTopStories(){
	
	oakHomeFactory.getTopStories().then(function success(response) {
		
	setTimeout(function () {
			$scope.$apply(function () {
			$scope.topstories = response;
			
			//$scope.testPlacement ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};
			
		});
	}, 0);
	
}, function error(response) {
	$log.debug('There is some issue while getting topstories from rest service');
});
}
	
  function getTopMid(){
		
		oakHomeFactory.getTopMid().then(function success(response) {
			
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.topmid = response;
				
				//$scope.testPlacement ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};
				
			});
		}, 0);
		
	}, function error(response) {
		$log.debug('There is some issue while getting topmid from rest service');
	});
	}
  
  function getTopLeft(){
		
		oakHomeFactory.getTopLeft().then(function success(response) {
			
		setTimeout(function () {
				$scope.$apply(function () {		
									
				$scope.topleftup = response.slice(0,3);
				$scope.topleftdown = response.slice(3,6);
				
				//$scope.testPlacement ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};
				
			});
		}, 0);
		
	}, function error(response) {
		$log.debug('There is some issue while getting topmid from rest service');
	});
	}
  
  function getHomeAds(){
		
		oakHomeFactory.getHomeAds().then(function success(response) {
			
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.homeads = response;
				
				//$scope.testPlacement ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};
				
			});
		}, 0);
		
	}, function error(response) {
		$log.debug('There is some issue while getting topmid from rest service');
	});
	}
  
    function getHomeSlider(){
		
		oakHomeFactory.getHomeSlider().then(function success(response) {
			
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.homeslider = response;
				
				//$scope.testPlacement ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};
				
			});
		}, 0);
		
	}, function error(response) {
		$log.debug('There is some issue while getting topmid from rest service');
	});
	}
    
    $scope.openModelPopup = function () {
 	   $scope.value = true;
                var dialog = ngDialog.open({
                    
 					templateUrl:'partial_views/template.html',
 					controller: 'userCtrl',
 					className: 'ngdialog-theme-default ngdialog-theme-plain custom-width',
 					scope: $scope
                 });  
    }
  
	
}]);
