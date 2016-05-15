oakAdminApp.controller('forumTopicCtrl',['$scope','$http','$stateParams','$log','forumTopicFactory','forumCategoriesFactory', function($scope,$http,$stateParams,$log,forumTopicFactory,forumCategoriesFactory) {

	$scope.currentPage = 1;
	$scope.pageSize = 10;
	$scope.forumTopics  = [];
	$scope.forumTopicID = $stateParams.forumTopicID;
  if($scope.forumTopicID !="" && $scope.forumTopicID !=undefined && $scope.forumTopicID !='undefined'){
	 getForumTopicByID($scope.forumTopicID); 
  }else{
	  getAllForumTopics();
  }
  

 $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
 };
  
  $scope.getForumTopicByID = function(category,updatedOn){
		var forumTopicID = category+"_"+updatedOn;
		
		forumTopicFactory.getForumTopicByID(forumTopicID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.forumTopic = response;
				
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting forumTopics from rest service');
  });
}
	
	$scope.createForumTopic = function(forumTopicObj){
		
		forumTopicFactory.createForumTopic(this.forumTopic)
				.then(function success(response) {
									
					getAllForumTopics();
					clearForumTopicForm(forumTopicObj);
					$('#createForumTopicModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  forumTopic ');
	  }); 
	}
	$scope.updateForumTopic = function(category,updatedOn,forumTopicObj){
		var forumTopicID = category+"_"+updatedOn;
		console.log($scope.forumTopic);
		
		forumTopicFactory.updateForumTopic($scope.forumTopic,forumTopicID)
				.then(function successCallback(response) {
					getAllForumTopics();
					clearForumTopicForm(forumTopicObj);
				
				$('#updateForumTopicModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  article ');
	  });
	}
	
	$scope.deleteForumTopic= function(category,updatedOn){
		var forumTopicID = category+"_"+updatedOn;
		forumTopicFactory.deleteForumTopicByID(forumTopicID).then(function success(response) {
			$log.debug("article deleted successfully");
			getAllForumTopics();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting forumTopics from rest service');
	  });
	}
	$scope.resetForm = function(forumTopicObj){
		clearForumTopicForm(forumTopicObj);
	}
	
	function clearForumTopicForm(forumTopicObj){
			forumTopicObj.category=null;
			forumTopicObj.title=null;
			forumTopicObj.displayImage=null;
				
	}
	
	function getForumTopicByID(forumTopicID){
		
		forumTopicFactory.getForumTopicByID(forumTopicID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.forumTopic = response;
				
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting forumTopics from rest service');
  });
}
		
	function getAllForumTopics(){
		
		forumTopicFactory.getForumTopics().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {						
					$scope.forumTopics = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting articles from rest service');
	  });
		
		forumCategoriesFactory.getForumCategories().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {						
					$scope.forumCategories = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting articleCategories from rest service');
	  });
		
		
	}

	
}]);
