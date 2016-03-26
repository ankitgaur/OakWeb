oakHomeApp.controller('oakHomeCtrl',['$scope','$rootScope','$http','$stateParams','$log','oakHomeFactory', 
                                     function($scope,$rootScope,$http,$stateParams,$log,oakHomeFactory) {
  var id="topmain_1";
  getPlacementByID(id);
  getTopStories();
  getTopMid();
  getTopLeft();
  getHomeAds();
  getHomeSlider();
  getVideoList();
  getTopBlogs();
  getMostPopularBlogCount();
  
  
  
   function getMostPopularBlogCount(){
		
		
		oakHomeFactory.getMostPopularBlogsDetails().then(function success(response) {
			
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.blogsCount = response;
				
			});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting states from rest service');
  });
}
  
  
  
  
  function getPlacementByID(id){
		var placementID = id;
		
		
		oakHomeFactory.getPlacementImgByID(placementID).then(function success(response) {
			
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.placement = response;
				
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
  
  function getTopBlogs(){
		
		oakHomeFactory.getTopBlogs().then(function success(response) {
			
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.topblogs = response;
				
				//$scope.testPlacement ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};
				
			});
		}, 0);
		
	}, function error(response) {
		$log.debug('There is some issue while getting topblogs from rest service');
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
  
  function getVideoList(){
		
		oakHomeFactory.getVideoList().then(function success(response) {
			
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.videolist = response;				
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
    
    $scope.openModelPopup = function (link) {
	 	   oakHomeFactory.getArticle(link).then(function success(response) {
 			
 		setTimeout(function () {
 				$scope.$apply(function () {
 				$rootScope.articleData = response;
 						
 				$('#articlePopup').modal('show');
 				
 				
 			});
 		}, 0);
 		
 	}, function error(response) {
 		$log.debug('There is some issue while getting topmid from rest service');
 	});
 	   
                  
     }
  
	
}]);
