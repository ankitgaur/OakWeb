oakHomeApp.config([ '$stateProvider', '$urlRouterProvider',
		'$locationProvider',
		function($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise('/');
			$stateProvider.state('home', {
				url : '/',
				views : {

					'body' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/homebody.html';
						},
						controller : 'oakHomeCtrl'
					},

					'placemen@home' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/singleimg.html';
						}
					},
					'topstories@home' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/topstories.html';
						}
					},
					'topslides@home' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/topslides.html';
						}
					},
					'articlegrid@home' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/articlegrid.html';
						}
					},
					'topleft@home' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/topleft.html';
						}

					},
					'homead1@home' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/ad1.html';
						}
					},
					'homead2@home' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/ad2.html';
						}
					},
					'picturegrid@home' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/picturegrid.html';
						}
					},
					'gallery@home' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/gallery.html';
						}
					},
					'oakleft@home' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/oakleft.html';
						}
					},
					'videolist@home' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/videolist.html';
						}
					}

				}
			}).state('blogs', {
				url : '/blogs',
				views : {

					'body' : {

						templateUrl : function($stateParams) {
							return 'partial_views/bloglist.html';
						},
						controller : 'oakBlogCtrl'
					}

				}
			}).state('blog', {
				url : '/blog/:blogID',
				views : {

					'body' : {

						templateUrl : function($stateParams) {
							return 'partial_views/bloglist.html';
						},
						controller : 'oakBlogCtrl'
					}

				}
			}).state('blogPost', {
				url : '/blogPost/:blogPostID',
				views : {

					'body' : {

						templateUrl : function($stateParams) {
							return 'partial_views/blogPost.html';
						},
						controller : 'oakBlogCtrl'
					}

				}
			}).state('news', {
				url : '/news',
				views : {

					'body' : {

						templateUrl : function($stateParams) {
							return 'partial_views/news.html';
						},
						controller : 'oakNewsCtrl'
					},

					'news-main-slider@news' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/gallery.html';
						}
					},

					'news-box@news' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/newsbox.html';
						}
					},

					'news-grid@news' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/articlegrid.html';
						}
					},

					'news-vertical-list@news' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/verticallist.html';
						}
					},

					'news-bottom-box@news' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/footerbox.html';
						}
					}

				}
			}).state('entertainment', {
				url : '/entertainment',
				views : {

					'body' : {

						templateUrl : function($stateParams) {
							return 'partial_views/entertainment.html';
						},
						controller : 'oakEntertainmentCtrl'
					},

					'entertainment-main-slider@entertainment' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/gallery.html';
						}
					},

					'entertainment-box@entertainment' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/newsbox.html';
						}
					},

					'entertainment-grid@entertainment' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/articlegrid.html';
						}
					},

					'entertainment-vertical-list@entertainment' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/verticallist.html';
						}
					},

					'entertainment-bottom-box@entertainment' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/footerbox.html';
						}
					}

				}
			}).state('citizenx', {
				url : '/citizenx',
				views : {

					'body' : {

						templateUrl : function($stateParams) {
							return 'partial_views/citizenx.html';
						},
						controller : 'oakCitizenxCtrl'
					},					
					
					'citizenx-box@citizenx' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/newsbox.html';
						}
					},

					'citizenx-grid@citizenx' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/articlegrid.html';
						}
					},

					'citizenx-vertical-list@citizenx' : {

						templateUrl : function($stateParams) {
							return 'partial_views/modules/verticallist.html';
						}
					}				

				}
			}).state('forum', {
				url : '/forum',
				views : {

					'body' : {

						templateUrl : function($stateParams) {
							return 'partial_views/forum.html';
						},
						controller : 'oakForumCtrl'
					}

				}
			}).state('topics', {
				url : '/forum/:catID',
				views : {

					'body' : {

						templateUrl : function($stateParams) {
							return 'partial_views/topics.html';
						},
						controller : 'oakForumCtrl'
					}

				}
			}).state('forum_posts', {
				url : '/forum_topic/:topicID',
				views : {

					'body' : {

						templateUrl : function($stateParams) {
							return 'partial_views/topic_posts.html';
						},
						controller : 'oakForumCtrl'
					}

				}
			});

		} ]);
