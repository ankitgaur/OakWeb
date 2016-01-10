oakAdminApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
       $locationProvider.hashPrefix("!");
	   $urlRouterProvider.otherwise('/');
       $stateProvider 
    .state('article', {
        url: '/articles',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/articles/listArticles.html';
                   },
					
				    controller: 'articleCtrl',
				}
			  
           }
    }).state('incident', {
        url: '/incidents',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/incidents/listIncidents.html';
                   },
					
				    controller: 'incidentCtrl',
				}
			  
           }
    }).state('state', {
        url: '/states',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/states/listStates.html';
                   },
					
				    controller: 'stateCtrl',
				}
			  
           }
    })
	.state('user', {
        url: '/users',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/states/listUsers.html';
                   },
					
				    controller: 'userCtrl',
				}
			  
           }
    })
	
	.state('blog', {
        url: '/blogs',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/blogs/listBlogs.html';
                   },
					
				    controller: 'blogCtrl',
				}
			  
           }
    })	
	.state('home', {
        url: '/',
        views: {
               'body': {
					
					 templateUrl: function ($stateParams) {
                      return  'partial_views/defaultOak.html';
                   },
				    controller: 'defaultCtrl',
					
               }
			  
           }
    });
	
}]);    

