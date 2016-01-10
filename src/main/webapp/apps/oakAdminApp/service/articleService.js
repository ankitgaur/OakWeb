oakAdminApp.factory('articleFactory',['$http','$log',function($http,$log){
	
	var articleFactory = {};
	

articleFactory.getArticles = function(){
	  var url = 'http://localhost:6767/articles';
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
	  var url = 'http://localhost:6767/articles';
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
	  var url = 'http://localhost:6767/articles';
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
		var url = 'http://localhost:6767/articles';
		var req = {
				method: 'POST',
				url: url,
				data:articleData
			}

	return $http(req).then(function success(response) {
			$log.debug('article created successfully ');			
		},function error(response) {
		$log.debug('There is some issue while getting data from rest service');
	});
  
	
}

articleFactory.updateArticles = function(articleData,articleID){
		var url = 'http://localhost:6767/articles';
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