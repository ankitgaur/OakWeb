oakHomeApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
       $urlRouterProvider.otherwise('/');
       $stateProvider 
	   .state('placement', {
        url: '/',
        views: {
               'placemen': {
					
					 templateUrl: function ($stateParams) {
                      return  'partial_views/modules/singleimg.html';
                   },
				    controller: 'oakHomeCtrl',
					
               },
               'topstories' : {
					
					 templateUrl: function ($stateParams) {
                    return  'partial_views/modules/topstories.html';
                 },
				    controller: 'oakHomeCtrl',
					
             }
			  
           }
    });
	
}]);    

