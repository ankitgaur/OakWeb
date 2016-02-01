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
					
             },
             'topmid' : {
					
				 templateUrl: function ($stateParams) {
                return  'partial_views/modules/topmid.html';
             },
			    controller: 'oakHomeCtrl',
				
             },
             'topleft' : {
					
				 templateUrl: function ($stateParams) {
                return  'partial_views/modules/topleft.html';
             },
			    controller: 'oakHomeCtrl',
				
             },
             'homead1' : {
					
				 templateUrl: function ($stateParams) {
                return  'partial_views/modules/ad1.html';
             },
			    controller: 'oakHomeCtrl',
				
             },
             'homeslider' : {
					
				 templateUrl: function ($stateParams) {
                return  'partial_views/modules/homeslider.html';
             },
			    controller: 'oakHomeCtrl',
				
             },
             'oakleft' : {
					
				 templateUrl: function ($stateParams) {
                return  'partial_views/modules/oakleft.html';
             },
			    controller: 'oakHomeCtrl',
				
             }
			  
           }
    });
	
}]);    

