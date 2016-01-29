oakAdminApp.controller('videoCtrl',['$scope','$http','$stateParams','$log','videoFactory', function($scope,$http,$stateParams,$log,videoFactory) {

	$scope.videos  = [];
	$scope.videoId = $stateParams.videoID;
  if($scope.videoId !="" && $scope.videoId !=undefined && $scope.videoId !='undefined'){
	 getVideoByID($scope.videoId); 
  }else{
	  getAllVideos();
  }
  
  $scope.getVideoByID = function(category,createdOn){
		var videoID = category+"_"+createdOn;
		
		videoFactory.getVideoByID(videoID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.video = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting videos from rest service');
  });
};
	
	$scope.createVideo = function(videoFormObj){
		videoFactory.createVideos(this.video)
				.then(function success(response) {
									
					getAllVideos();
					clearVideoForm(videoFormObj);
					$('#createVideoModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  video ');
	  }); 
	};
	
	$scope.updateVideo = function(category,createdOn,videoFormObj){
		var videoID = category+"_"+createdOn;
		console.log($scope.video);
		videoFactory.updateVideos($scope.video,videoID)
				.then(function successCallback(response) {
					getAllVideos();
					clearVideoForm(videoFormObj);
				
				$('#updateVideoModal').modal('hide');
				}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  video ');
	  });
	};
	
	$scope.deleteVideo= function(category,createdOn){
		var videoID = category+"_"+createdOn;
		videoFactory.deleteVideoByID(videoID).then(function success(response) {
			$log.debug("video deleted successfully");
			getAllVideos();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting videos from rest service');
	  });
	};
	
	$scope.resetForm = function(videoFormObj){
		clearVideoForm(videoFormObj);
	};
	
	function clearVideoForm(videoFormObj){
			videoFormObj.category=null;
			videoFormObj.createdBy=null;
			videoFormObj.title=null;
			videoFormObj.updatedBy=null;
			videoFormObj.createdOn=null;
	}
	
	function getVideoByID(videoID){
		
		videoFactory.getVideoByID(videoID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.video = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting videos from rest service');
  });
}
		
	function getAllVideos(){
		
		videoFactory.getVideos().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {
					$scope.videos = response;
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting videos from rest service');
	  });
	}

	
}]);
