articleApp.controller('articleCtrl',['$scope','$http','getArticleData','$stateParams', function($scope,$http,getArticleData,$stateParams) {

   
	$scope.articles  = [];
	$scope.saveArticles = function(){
		$scope.articles.push({title:$scope.title,description:$scope.description});
	}
	
	getAllArticles();
	
	$scope.articleId = $stateParams.articleID;
	
	$scope.searchArticles = [];
	
	getArticleById($scope.articleId);
		
	function getAllArticles(){
		$scope.articles = getArticleData.data.articles;
		
	}
	function getArticleById(articleID){
		
		angular.forEach($scope.articles, function(value, key) {
				
			if(articleID == value.id){
				$scope.searchArticles.push({title:value.title,description:value.description});
			}
			
		});
	}
    
    $scope.resetForm = function() {
        $scope.title = "";
		$scope.description = "";
		
    };

}]);