articleApp.factory('articleFactory',['$http',function($http){
	
	var articleFactory = {};
	articleFactory.getArticles = function(){
			return  $http.get("json/article.json");

	}
	return articleFactory;

}]);