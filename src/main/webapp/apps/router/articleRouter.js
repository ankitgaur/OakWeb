articleApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
       //$locationProvider.hashPrefix("!");
	   $urlRouterProvider.otherwise('/articles');
       $stateProvider 
    .state('home', {
        url: '/article/:articleID',
        views: {
               'body': {
                   templateUrl: function ($stateParams) {
                      return  'partial_views/userArticles.html';
                   },
                   controller: 'articleCtrl',
                   resolve: {
					    
                       getArticleData: ['articleFactory', function(articleFactory) {
                          	return articleFactory.getArticles();
                       }]
                   }
               },
               'body12': {
                   templateUrl: function ($stateParams) {
                      return  'partial_views/userArticles.html';
                   },
                   controller: 'articleCtrl',
                   resolve: {
					    
                       getArticleData: ['articleFactory', function(articleFactory) {
                          	return articleFactory.getArticles();
                       }]
                   }
               }
           }
    }).state('default', {
        url: '/articles',
        views: {
               'body': {
					
					templateUrl: 'partial_views/userArticles.html',
				    controller: 'articleCtrl',
					resolve: {
				   
                       getArticleData: ['articleFactory', function(articleFactory) {
                           
							return articleFactory.getArticles();
                       }]
					   
                   }
               }
			  
           }
    });
	
}]);    

