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
  
  $scope.getForumPostByID = function(forumPostID){
		
		
		forumPostFactory.getForumPostByID(forumPostID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.forumPost = response;
				CKEDITOR.instances.editor2.setData(response.content);
				
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting forumPosts from rest service');
  });
}
	
	$scope.createForumPost = function(forumPostFormObj){
		
		var file =  $("#displayImage").get(0).files[0];
		var bdata = new FormData();
		
		bdata.append('topic',forumPostFormObj.topic);
		bdata.append('title',forumPostFormObj.title);
		bdata.append('displayImage', file);
		bdata.append('content', CKEDITOR.instances.editor1.getData());
		
		
		forumPostFactory.createForumPosts(bdata)
				.then(function success(response) {
									
					getAllForumPosts();
					clearForumPostForm(forumPostFormObj);
					$('#createForumPostModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  article ');
	  }); 
	}
	$scope.updateForumPost = function(forumPostID,forumPostFormObj){
		forumPostFormObj.content = CKEDITOR.instances.editor2.getData();
		console.log(forumPostFormObj);
		
		forumPostFactory.updateForumPosts(forumPostFormObj,forumPostID)
				.then(function successCallback(response) {
					getAllForumPosts();
					clearForumPostForm(forumPostFormObj);
				$('#updateForumPostModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while creating  article ');
	  });
	}
	
	$scope.deleteForumPost= function(forumPostID){
		
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
