articleApp.controller('articleDetailCtrl',['$scope','$http','$stateParams','$log','articleFactory', function($scope,$http,$stateParams,$log,articleFactory) {

	$scope.articles  = [];
	$scope.articleId = $stateParams.articleID;
  if($scope.articleId !="" && $scope.articleId !=undefined && $scope.articleId !='undefined'){
	 getArticleByID($scope.articleId); 
  }else{
	  getAllArticles();
  }
	$scope.createArticle = function(){
		articleFactory.createArticles($scope.article)
				.then(function success(response) {
					getAllArticles();
					$('#createArticleModal').modal('hide');
				}, function error(response) {
		 $log.debug('There is some issue while crating  article ');
	  }); 
	}
	$scope.updateArticle = function(category,updatedOn){
		var articleID = category+"_"+updatedOn;
		articleFactory.updateArticles($scope.article,articleID)
				.then(function successCallback(response) {
					getAllArticles();
					}, function errorCallback(response) {
		 $log.debug('There is some issue while crating  article ');
	  });
	}
		
	$scope.createPopup = function(){
		alert("Yayyy!");
		$scope.showModal = true;
	}
	
	$scope.deleteArticle= function(category,updatedOn){
		var articleID = category+"_"+updatedOn;
		articleFactory.deleteArticleByID(articleID).then(function success(response) {
			$log.debug("article deleted successfully");
			getAllArticles();
			
	  }, function error(response) {
			$log.debug('There is some issue while getting articles from rest service');
	  });
	}
	
	$scope.clearArticleForm = function(){
		$scope.article = {
		category: "",
		title: "",
		createdBy:"",
		updatedBy:""
    };
	 var articleOrg = angular.copy($scope.article);
		$scope.article = angular.copy(articleOrg);
		$scope.articleForm.$setPristine();
	}
	function getArticleByID(articleID){
		
		articleFactory.getArticleByID(articleID).then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.article = response;
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting articles from rest service');
  });
}
		
	function getAllArticles(){
		
		articleFactory.getArticles().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {
					$scope.articles = response;
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting articles from rest service');
	  });
	}

	
}]);
