oakHomeApp.factory('oakHomeFactory',['$http','$log',function($http,$log){
	
var oakHomeFactory = {};
	
oakHomeFactory.getPlacementImgByID = function(placementID){
	  var url = 'http://localhost:6767/placements';
	  url = url+"/"+placementID;
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		  }).then(function successCallback(response) {
			    return response.data;
	  }, function errorCallback(response) {
		$log.debug('There is some issue while getting data from rest service');
	  }); 
  
}
	return oakHomeFactory;

}]);