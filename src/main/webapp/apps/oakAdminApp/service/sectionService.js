oakAdminApp.factory('sectionFactory',['$http','$log',function($http,$log){
	
	var sectionFactory = {};
	

sectionFactory.getSections = function(){
	  var url = AppConfig.appUrl+'sections';
	 
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		 }).then(function successCallback(response) {
			 return response.data;
	  }, function errorCallback(response) {
			$log.debug('There is some issue while getting section from rest service');
	  }); 
  
};

sectionFactory.getSectionByID = function(sectionID){
	  var url = AppConfig.appUrl+'sections';
	  url = url+"/"+sectionID;
	return $http({
		  method: 'GET',
		  url: url,
		  crossDomain:true
		  }).then(function successCallback(response) {
			  return response.data;
	  }, function errorCallback(response) {
		  $log.debug('There is some issue while getting section from rest service');
	  }); 
  
};

sectionFactory.deleteSectionByID = function(sectionID){
	  var url = AppConfig.appUrl+'sections';
	  url = url+"/"+sectionID;
	return $http({
		  method: 'DELETE',
		  url: url,
		  crossDomain:true
		  
	 }).then(function successCallback(response) {
		 return response.data;
	  }, function errorCallback(response) {
		  $log.debug('There is some issue while getting section from rest service');
	  }); 
  
};


sectionFactory.createSection = function(sectionData){
		var url = AppConfig.appUrl+'sections';
		var req = {
				method: 'POST',
				url: url,
				data:sectionData
			};

	return $http(req).then(function success(response) {
			$log.debug('section created successfully ');			
		},function error(response) {
			$log.debug('There is some issue while getting section from rest service');
	});
  
	
};

sectionFactory.updateSection= function(sectionData,sectionID){
		var url = AppConfig.appUrl+'sections';
		url = url+"/"+sectionID;
		var req = {
				method: 'PUT',
				url: url,
				data:sectionData
		   };
	
	return $http(req).then(function success(response) {
			$log.debug('section updated successfully ');
		},function error(response) {
			$log.debug('There is some issue while getting section from rest service');
	});
  
	
}

	return sectionFactory;

}]);