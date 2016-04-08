oakAdminApp.factory('pageFactory',['$http','$log',function($http,$log){
	
	var pageFactory = {};
	

pageFactory.getPages = function(){
	  var url = AppConfig.appUrl+'pages';
	 
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		 }).then(function successCallback(response) {
			 return response.data;
	  }, function errorCallback(response) {
			$log.debug('There is some issue while getting page from rest service');
	  }); 
  
};

pageFactory.getPageByID = function(pageID){
	  var url = AppConfig.appUrl+'pages';
	  url = url+"/"+pageID;
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		  }).then(function successCallback(response) {
			  return response.data;
	  }, function errorCallback(response) {
		  $log.debug('There is some issue while getting page from rest service');
	  }); 
  
};

pageFactory.deletePageByID = function(pageID){
	  var url = AppConfig.appUrl+'pages';
	  url = url+"/"+pageID;
	return $http({
		  method: 'DELETE',
		  url: url,
		  crossDomain:true
		  
	 }).then(function successCallback(response) {
		 return response.data;
	  }, function errorCallback(response) {
		  $log.debug('There is some issue while getting page from rest service');
	  }); 
  
};


pageFactory.createPage = function(pageData){
		var url = AppConfig.appUrl+'pages';
		var req = {
				method: 'POST',
				url: url,
				data:pageData
			};

	return $http(req).then(function success(response) {
			$log.debug('page created successfully ');			
		},function error(response) {
			$log.debug('There is some issue while getting page from rest service');
	});
  
	
};

pageFactory.updatePage= function(pageData,pageID){
		var url = AppConfig.appUrl+'pages';
		url = url+"/"+pageID;
		var req = {
				method: 'PUT',
				url: url,
				data:pageData
		   };
	
	return $http(req).then(function success(response) {
			$log.debug('page updated successfully ');
		},function error(response) {
			$log.debug('There is some issue while getting page from rest service');
	});
  
	
}

	return pageFactory;

}]);