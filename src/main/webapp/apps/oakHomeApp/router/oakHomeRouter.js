oakHomeApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
       $urlRouterProvider.otherwise('/');
       $stateProvider 
	   .state('home', {
        url: '/',		
		     views: {
			
				'body': {
					
					 templateUrl: function ($stateParams) {
                      return  'partial_views/modules/homebody.html';
                   },
					 controller: 'oakHomeCtrl'
               },
			
               'placemen@home': {
					
					 templateUrl: function ($stateParams) {
                      return  'partial_views/modules/singleimg.html';
                   }					
               },
               'topstories@home' : {
					
					 templateUrl: function ($stateParams) {
                    return  'partial_views/modules/topstories.html';
                 }					
             },
             'topmid@home' : {
					
				 templateUrl: function ($stateParams) {
                return  'partial_views/modules/topmid.html';
             }
             },
             'topleft@home' : {
					
				 templateUrl: function ($stateParams) {
                return  'partial_views/modules/topleft.html';
             }
			   				
             },
             'homead1@home' : {
					
				 templateUrl: function ($stateParams) {
                return  'partial_views/modules/ad1.html';
             }				
             },
             'homeslider@home' : {
					
				 templateUrl: function ($stateParams) {
                return  'partial_views/modules/homeslider.html';
             }				
             },
             'oakleft@home' : {
					
				 templateUrl: function ($stateParams) {
                return  'partial_views/modules/oakleft.html';
             }				
             },
             'videolist@home' : {
					
				 templateUrl: function ($stateParams) {
                return  'partial_views/modules/videolist.html';
             }
             }
			   
			  
           }
    })
	.state('blog', {
        url: '/blog',		
		     views: {
			
				'body': {
					
					 templateUrl: function ($stateParams) {
                      return  'partial_views/modules/blogbody.html';
                   },
					 controller: 'oakHomeCtrl'
               }
			   
			  
           }
    }).state('news', {
        url: '/news',		
	     views: {
		
			'body': {
				
				 templateUrl: function ($stateParams) {
                 return  'partial_views/news.html';
              },
				 controller: 'oakHomeCtrl'
          },
			
          'news-main-slider@news': {
				
				 templateUrl: function ($stateParams) {
                 return  'partial_views/modules/slider.html';
              }					
          },
			
          'news-box@news': {
				
				 templateUrl: function ($stateParams) {
                 return  'partial_views/modules/newsbox.html';
              }					
          },
			
          'news-grid@news': {
				
				 templateUrl: function ($stateParams) {
                 return  'partial_views/modules/gridboxes.html';
              }					
          },
			
          'news-vertical-list@news': {
				
				 templateUrl: function ($stateParams) {
                 return  'partial_views/modules/verticallist.html';
              }					
          },
			
          'news-bottom-box@news': {
				
				 templateUrl: function ($stateParams) {
                 return  'partial_views/modules/footerbox.html';
              }					
          }
		   	  
      }
}).state('citizenx', {
    url: '/citizenx',		
    views: {
	
		'body': {
			
			 templateUrl: function ($stateParams) {
            return  'partial_views/citizenx.html';
         },
			 controller: 'oakHomeCtrl'
     }
	   
	  
 }
});
	
	
	
}]);    

