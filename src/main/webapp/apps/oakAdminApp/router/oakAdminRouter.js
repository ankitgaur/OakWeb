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
    }).state('articleCategory', {
        url: '/articleCategories',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/articleCategories/listArticleCategories.html';
                   },
					
				    controller: 'articleCategoryCtrl',
				}
			  
           }
    }).state('blogCategory', {
        url: '/blogCategories',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/blogCategories/listBlogCategories.html';
                   },
					
				    controller: 'blogCategoryCtrl',
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
    }).state('placement', {
        url: '/placement',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/placements/listPlacements.html';
                   },
					
				    controller: 'placementCtrl',
				}
			  
           }
    })
	.state('user', {
        url: '/user',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/users/listUsers.html';
                   },
					
				    controller: 'userCtrl',
				}
			  
           }
    })
	.state('groups', {
        url: '/groups',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/groups/listGroups.html';
                   },
					
				    controller: 'groupsCtrl',
				}
			  
           }
    })
    .state('roles', {
        url: '/roles',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/roles/listRoles.html';
                   },
					
				    controller: 'rolesCtrl',
				}
			  
           }
    })
	.state('blogEntry', {
        url: '/blogEntries',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/blogEntries/listBlogEntries.html';
                   },
					
				    controller: 'blogEntryCtrl',
				}
			  
           }
    }).state('blogs', {
        url: '/blogs',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/blog/listBlog.html';
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
    })
    .state('video', {
        url: '/videos',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/videos/listVideos.html';
                   },
					
				    controller: 'videoCtrl',
				}
			  
           }
    }).state('page', {
        url: '/pages',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/pages/listPages.html';
                   },
					
				    controller: 'pagesCtrl',
				}
			  
           }
    })
    
    .state('section', {
        url: '/sections',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/sections/listSections.html';
                   },
					
				    controller: 'sectionsCtrl',
				}
			  
           }
    })
    
    .state('image', {
        url: '/images',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/images/listImages.html';
                   },
					
				    controller: 'imageCtrl',
				}
			  
           }
    }).state('forumCategory', {
        url: '/forumCategory',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/forumCategories/listForumCategories.html';
                   },
					
				    controller: 'forumCategoriesCtrl',
				}
			  
           }
    }).state('forumTopics', {
        url: '/forumTopics',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/forumTopics/listForumTopics.html';
                   },
					
				    controller: 'forumTopicCtrl',
				}
			  
           }
    }).state('forumPost', {
        url: '/forumPost',
        views: {
               'body': {
				   
				   templateUrl: function ($stateParams) {
                      return  'partial_views/forumPost/listForumPost.html';
                   },
					
				    controller: 'forumPostCtrl',
				}
			  
           }
    });	
}]);    

