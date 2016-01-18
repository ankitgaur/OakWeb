oakHomeApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
       $urlRouterProvider.otherwise('/');
       $stateProvider 
	   .state('placement', {
        url: '/',
        views: {
               'placemen': {
					
					 templateUrl: function ($stateParams) {
                      return  'placement.html';
                   },
				    controller: 'oakHomeCtrl',
					
               }
			  
           }
    });
	
}]);    

