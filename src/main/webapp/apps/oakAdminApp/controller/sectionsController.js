oakAdminApp.controller('sectionsCtrl',['$scope','$http','$stateParams','$log','sectionFactory', function($scope,$http,$stateParams,$log,sectionFactory) {

	$scope.currentSection = 1;	
	$scope.sectionSize = 10;
	$scope.sections  = [];
	$scope.sectionId = $stateParams.sectionId;
  if($scope.sectionId !="" && $scope.sectionId !=undefined && $scope.sectionId !='undefined'){
	  getSectionByID($scope.sectionId); 
  }else{
	  getAllSections();
  }
  
 $scope.sectionChangeHandler = function(num) {
    console.log('going to section ' + num);
  };
  
  $scope.getSectionByID = function(sectionId){
				
		sectionFactory.getSectionByID(sectionId).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.section = response;				
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting sections from rest service');
  });
}
	
	$scope.createSection = function(sectionFormObj){
		
		sectionFactory.createSection(this.section)
				.then(function success(response) {
									
					getAllSections();
					clearForm(sectionFormObj);
					$('#createSectionModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while creating  section');
	  }); 
	}
	$scope.updateSection = function(sectionId,sectionFormObj){
					
		sectionFactory.updateSection($scope.section,sectionId)
				.then(function successCallback(response) {
					getAllSections();
					clearForm(sectionFormObj);
				
				$('#updateSectionModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while updating  section ');
	  });
	}
	
	$scope.deleteSection = function(sectionId){
		
		sectionFactory.deleteSectionByID(sectionId).then(function success(response) {
			
			getAllSections();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting sections from rest service');
	  });
	}
	$scope.resetForm = function(sectionFormObj){
		clearForm(sectionFormObj);
	}
	
	function clearForm(sectionFormObj){
		sectionFormObj.page=null;
		sectionFormObj.name=null;
						
	}
	
	function getSectionByID(sectionID){
		
		sectionFactory.getSectionByID(sectionID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.section = response;
			
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting sections from rest service');
  });
}
		
	function getAllSections(){
		
		sectionFactory.getSections().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {						
					$scope.sections = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting sections from rest service');
	  });
	}

	
}]);
