oakAdminApp.factory('imageFactory',['$http','$log',function($http,$log){
	
	var imageFactory = {};
	

imageFactory.getPrefixes = function(){
	  var url = AppConfig.appUrl+'images/prefixes';
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		 }).then(function successCallback(response) {
			 return response.data;
	  }, function errorCallback(response) {
			$log.debug('There is some issue while getting image prefixes from rest service');
	  }); 
  
};

imageFactory.getRecentImages = function(){
	  var url = AppConfig.appUrl+'images';
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		 }).then(function successCallback(response) {
			 return response.data;
	  }, function errorCallback(response) {
			$log.debug('There is some issue while getting images from rest service');
	  }); 

};


imageFactory.createArticleCategory = function(imageData){
		var url = AppConfig.appUrl+'article_categories';
		var req = {
				method: 'POST',
				url: url,
				data:imageData
			};

	return $http(req).then(function success(response) {
			$log.debug('article created successfully ');			
		},function error(response) {
			$log.debug('There is some issue while getting article category from rest service');
	});
  
	
};

return imageFactory;

}]);