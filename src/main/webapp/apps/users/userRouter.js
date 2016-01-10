userApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
       $locationProvider.hashPrefix("!");
	   $urlRouterProvider.otherwise('/');
       $stateProvider 
    .state('child', {
        url: '/users/:userID',
        views: {
               'body': {
                   templateUrl: function ($stateParams) {
                      return  'partial_views/createUpdateUser.html';
                   },
                   controller: 'userDetailCtrl',
                  /*  resolve: {
					    
                       getUserData: ['userFactory', function(userFactory) {
                          	return userFactory.getUsers();
                       }]
                   } */
               }
           }
    }).state('create', {
        url: '/createUsers',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/createUpdateUser.html';
                   },
					
				    controller: 'userDetailCtrl',
					}
			  
           }
    }).state('home', {
        url: '/',
        views: {
               'body': {
					
					 templateUrl: function ($stateParams) {
                      return  'partial_views/users/listUsers.html';
                   },
				    controller: 'userDetailCtrl',
					
               }
			  
           }
    });
	
}]);    

