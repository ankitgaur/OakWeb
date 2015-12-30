articleApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
       $locationProvider.hashPrefix("!");
	   $urlRouterProvider.otherwise('/');
       $stateProvider 
    .state('child', {
        url: '/articles/:articleID',
        views: {
               'body': {
                   templateUrl: function ($stateParams) {
                      return  'partial_views/createUpdateArticle.html';
                   },
                   controller: 'articleDetailCtrl',
                  /*  resolve: {
					    
                       getArticleData: ['articleFactory', function(articleFactory) {
                          	return articleFactory.getArticles();
                       }]
                   } */
               }
           }
    }).state('create', {
        url: '/createArticles',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/createUpdateArticle.html';
                   },
					
				    controller: 'articleDetailCtrl',
					}
			  
           }
    }).state('home', {
        url: '/',
        views: {
               'body': {
					
					 templateUrl: function ($stateParams) {
                      return  'partial_views/userArticles.html';
                   },
				    controller: 'articleDetailCtrl',
					
               }
			  
           }
    });
	
}]);    

