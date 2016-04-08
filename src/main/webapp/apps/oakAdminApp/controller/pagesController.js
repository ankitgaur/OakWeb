oakAdminApp.controller('pagesCtrl',['$scope','$http','$stateParams','$log','pagesFactory', function($scope,$http,$stateParams,$log,pagesFactory) {

	$scope.currentPage = 1;	
	$scope.pageSize = 10;
	$scope.pages  = [];
	$scope.pageId = $stateParams.pageId;
  if($scope.pageId !="" && $scope.pageId !=undefined && $scope.pageId !='undefined'){
	  getPageByID($scope.pageId); 
  }else{
	  getAllPages();
  }
  
 $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
  
  $scope.getPageByID = function(pageId){
				
		pagesFactory.getPageByID(pageId).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.page = response;				
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting pages from rest service');
  });
}
	
	$scope.createPage = function(pageFormObj){
		
		pagesFactory.createPage(this.page)
				.then(function success(response) {
									
					getAllPages();
					clearForm(pageFormObj);
					$('#createPageModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while creating  page');
	  }); 
	}
	$scope.updatePage = function(pageId,pageFormObj){
					
		pagesFactory.updateBlogCategory($scope.page,pageId)
				.then(function successCallback(response) {
					getAllPages();
					clearForm(pageFormObj);
				
				$('#updatePageModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while updating  page ');
	  });
	}
	
	$scope.deletePage = function(pageId){
		
		pagesFactory.deleteBlogCategoryByID(pageId).then(function success(response) {
			
			getAllPages();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting pages from rest service');
	  });
	}
	$scope.resetForm = function(pageFormObj){
		clearForm(pageFormObj);
	}
	
	function clearForm(pageFormObj){
		pageFormObj.link=null;
		pageFormObj.name=null;
		pageFormObj.parent=null;
				
	}
	
	function getPageByID(pageID){
		
		pagesFactory.getPageByID(pageID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.page = response;
			
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting pages from rest service');
  });
}
		
	function getAllPages(){
		
		pagesFactory.getPages().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {						
					$scope.pages = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting pages from rest service');
	  });
	}

	
}]);
