oakAdminApp.factory('articleFactory',['$http','$log',function($http,$log){
	
	var articleFactory = {};
	

articleFactory.getArticles = function(){
	  var url = AppConfig.appUrl+'articles';
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

articleFactory.getArticleByID = function(articleID){
	  var url = AppConfig.appUrl+'articles';
	  url = url+"/"+articleID;
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

articleFactory.deleteArticleByID = function(articleID){
	  var url = AppConfig.appUrl+'articles';
	  url = url+"/"+articleID;
	return $http({
		  method: 'DELETE',
		  url: url,
		  crossDomain:true
		  
	 }).then(function successCallback(response) {
		 return response.data;
	  }, function errorCallback(response) {
			$log.debug('There is some issue while getting data from rest service');
	  }); 
  
}


articleFactory.createArticles = function(articleData){
		var url = AppConfig.appUrl+'articles';
		return $http.post(url, articleData, {
	          transformRequest: angular.identity,
	          headers: {'Content-Type': undefined}
	       }).then(function success(response) {
			   return response.data;
				$log.debug('blog updated successfully ');
			},function error(response) {
				$log.debug('There is some issue while getting blog category from rest service');
		});
  
	
}

articleFactory.updateArticles = function(articleData,articleID){
		var url = AppConfig.appUrl+'articles';
		url = url+"/"+articleID;
		var req = {
				method: 'PUT',
				url: url,
				data:articleData
		   }
	
	return $http(req).then(function success(response) {
			$log.debug('article updated successfully ');
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

	return articleFactory;

}]);