oakAdminApp.controller('forumPostCtrl',['$scope','$http','$stateParams','$log','forumPostFactory','forumTopicFactory', function($scope,$http,$stateParams,$log,forumPostFactory,forumTopicFactory) {

	$scope.currentPage = 1;
	$scope.pageSize = 10;
	$scope.forumPosts  = [];
	$scope.forumPostId = $stateParams.forumPostID;
  if($scope.forumPostId !="" && $scope.forumPostId !=undefined && $scope.forumPostId !='undefined'){
	 getForumPostByID($scope.forumPostId); 
  }else{
	  getAllForumPosts();
  }
  

	$scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
  
  $scope.getForumPostByID = function(topic,updatedOn){
		var forumPostID = topic+"_"+updatedOn;
		
		forumPostFactory.getForumPostByID(forumPostID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.forumPost = response;
				
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting forumPosts from rest service');
  });
}
	
	$scope.createForumPost = function(forumPostFormObj){
		forumPostFactory.createForumPosts(this.forumPost)
				.then(function success(response) {
									
					getAllForumPosts();
					clearForumPostForm(forumPostFormObj);
					$('#createForumPostModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  article ');
	  }); 
	}
	$scope.updateForumPost = function(topic,updatedOn,forumPostFormObj){
		var forumPostID = topic+"_"+updatedOn;
		console.log($scope.forumPost);
		
		forumPostFactory.updateForumPosts($scope.forumPost,forumPostID)
				.then(function successCallback(response) {
					getAllForumPosts();
					clearForumPostForm(forumPostFormObj);
				$('#updateForumPostModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while creating  article ');
	  });
	}
	
	$scope.deleteForumPost= function(topic,updatedOn){
		var forumPostID = topic+"_"+updatedOn;
		forumPostFactory.deleteForumPostByID(forumPostID).then(function success(response) {
			$log.debug("article deleted successfully");
			getAllForumPosts();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting forumPosts from rest service');
	  });
	}
	$scope.resetForm = function(forumPostFormObj){
		clearForumPostForm(forumPostFormObj);
	}
	
	function clearForumPostForm(forumPostFormObj){
			forumPostFormObj.topic=null;
			forumPostFormObj.title=null;
			forumPostFormObj.displayImage=null;
				
	}
	
	function getForumPostByID(forumPostID){
		
		forumPostFactory.getForumPostByID(forumPostID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.forumPost = response;
				
				//$('textarea#editor2').html(response.content);
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting forumPosts from rest service');
  });
}
		
	function getAllForumPosts(){
		
		forumPostFactory.getForumPosts().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {						
					$scope.forumPosts = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting forumPosts from rest service');
	  });
		
		forumTopicFactory.getForumTopics().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {						
					$scope.forumTopicCategories = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting forumTopicCategories from rest service');
	  });
		
		
	}

	
}]);
