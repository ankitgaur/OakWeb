oakAdminApp.factory('articleCategoryFactory',['$http','$log',function($http,$log){
	
	var articleCategoryFactory = {};
	

articleCategoryFactory.getArticleCategories = function(){
	  var url = AppConfig.appUrl+'article_categories';
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		 }).then(function successCallback(response) {
			 return response.data;
	  }, function errorCallback(response) {
			$log.debug('There is some issue while getting article category from rest service');
	  }); 
  
};

articleCategoryFactory.getArticleCategoryByID = function(articleCategoryID){
	  var url = AppConfig.appUrl+'article_categories';
	  url = url+"/"+articleCategoryID;
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		  }).then(function successCallback(response) {
			  return response.data;
	  }, function errorCallback(response) {
		  $log.debug('There is some issue while getting article category from rest service');
	  }); 
  
};

articleCategoryFactory.deleteArticleCategoryByID = function(articleCategoryID){
	  var url = AppConfig.appUrl+'article_categories';
	  url = url+"/"+articleCategoryID;
	return $http({
		  method: 'DELETE',
		  url: url,
		  crossDomain:true
		  
	 }).then(function successCallback(response) {
		 return response.data;
	  }, function errorCallback(response) {
		  $log.debug('There is some issue while getting article category from rest service');
	  }); 
  
};


articleCategoryFactory.createArticleCategory = function(articleCategoryData){
		var url = AppConfig.appUrl+'article_categories';
		var req = {
				method: 'POST',
				url: url,
				data:articleCategoryData
			};

	return $http(req).then(function success(response) {
			$log.debug('article created successfully ');			
		},function error(response) {
			$log.debug('There is some issue while getting article category from rest service');
	});
  
	
};

articleCategoryFactory.updateArticleCategory = function(articleCategoryData,articleCategoryID){
		var url = AppConfig.appUrl+'article_categories';
		url = url+"/"+articleCategoryID;
		var req = {
				method: 'PUT',
				url: url,
				data:articleCategoryData
		   };
	
	return $http(req).then(function success(response) {
			$log.debug('article updated successfully ');
		},function error(response) {
			$log.debug('There is some issue while getting article category from rest service');
	});
  
	
}

	return articleCategoryFactory;

}]);