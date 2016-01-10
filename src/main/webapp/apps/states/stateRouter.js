stateApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
       $locationProvider.hashPrefix("!");
	   $urlRouterProvider.otherwise('/');
       $stateProvider 
    .state('child', {
        url: '/states/:stateID',
        views: {
               'body': {
                   templateUrl: function ($stateParams) {
                      return  'partial_views/createUpdateState.html';
                   },
                   controller: 'stateDetailCtrl',
                  /*  resolve: {
					    
                       getStateData: ['stateFactory', function(stateFactory) {
                          	return stateFactory.getStates();
                       }]
                   } */
               }
           }
    }).state('create', {
        url: '/createStates',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/createUpdateState.html';
                   },
					
				    controller: 'stateDetailCtrl',
					}
			  
           }
    }).state('home', {
        url: '/',
        views: {
               'body': {
					
					 templateUrl: function ($stateParams) {
                      return  'partial_views/states/listStates.html';
                   },
				    controller: 'stateDetailCtrl',
					
               }
			  
           }
    });
	
}]);    

