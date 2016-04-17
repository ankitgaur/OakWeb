oakHomeApp
		.controller(
				'oakHomeCtrl',
				[
						'$scope',
						'$rootScope',
						'$http',
						'$stateParams',
						'$log',
						'oakHomeFactory',
						function($scope, $rootScope, $http, $stateParams, $log,
								oakHomeFactory) {

							var id = "topmain_1";
							// getPlacementByID(id); //home
							getTopStories(); // home
							getArticleGrid(); // home
							// getTopLeft(); //home
							getTopSlides();
							getHomeAds(); // home
							getGallery(); // home
							getVideos(); // home

							function getPlacementByID(id) {
								var placementID = id;

								oakHomeFactory
										.getPlacementImgByID(placementID)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.placement = response;

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting states from rest service');
												});
							}

							function getTopStories() {

								oakHomeFactory
										.getArticlesByLimit(6)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.topstories = response;
																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topstories from rest service');
												});
							}

							function getGallery() {
								oakHomeFactory
										.getPlacement('home_gallery')
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.gallery = response;
																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting articlegrid from rest service');
												});
							}

							function getArticleGrid() {

								oakHomeFactory
										.getPlacement('home_articlegrid')
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.articlegrid = response;
																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting articlegrid from rest service');
												});
							}

							function getVideos() {

								oakHomeFactory
										.getVideoList()
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.videos = response;
																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});
							}

							function getTopLeft() {

								oakHomeFactory
										.getTopLeft()
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {

																			$scope.topleftup = response
																					.slice(
																							0,
																							3);
																			$scope.topleftdown = response
																					.slice(
																							3,
																							6);
																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});
							}

							function getHomeAds() {

								oakHomeFactory
										.getPlacement('home_ads')
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.homeads = response;
																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});
							}

							function getTopSlides() {

								oakHomeFactory
										.getPlacement('home_topslider')
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.topslides = response;
																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topslides from rest service');
												});
							}

							$scope.openModelPopup = function(link) {
								oakHomeFactory
										.getArticle(link)
										.then(
												function success(response) {
													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$rootScope.articleData = response;

																			$(
																					'#articlePopup')
																					.modal(
																							'show');

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});

							}

							$scope.getIframeSrc = function(src) {
								return src;
							};

						} ]);

/* News Controller Starts */

oakHomeApp
		.controller(
				'oakNewsCtrl',
				[
						'$scope',
						'$rootScope',
						'$http',
						'$stateParams',
						'$log',
						'oakHomeFactory',
						function($scope, $rootScope, $http, $stateParams, $log,
								oakHomeFactory) {

							getNewsFooter(); // news
							getNewsSlider(); // news
							getPopularNews(); // news
							getLatestNews(); // news
							getNewsSpotLight(); // news

							function getNewsFooter() {
								$scope.footerbox1_title = "Headlines";
								$scope.footerbox2_title = "Business";
								$scope.footerbox3_title = "Sports";
								$scope.footerbox4_title = "World";

								oakHomeFactory
										.getArticleCatByLimit('headlines', 5)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.footerbox1_items = response;

																			// $scope.testPlacement
																			// ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});

								oakHomeFactory
										.getArticleCatByLimit('business', 5)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.footerbox2_items = response;

																			// $scope.testPlacement
																			// ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});

								oakHomeFactory
										.getArticleCatByLimit('sports', 5)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.footerbox3_items = response;

																			// $scope.testPlacement
																			// ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});

								oakHomeFactory
										.getArticleCatByLimit('world', 5)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.footerbox4_items = response;

																			// $scope.testPlacement
																			// ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});

							}

							function getNewsSlider() {

								oakHomeFactory
										.getPlacement("news_slider")
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.gallery = response;

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting news slider from rest service');
												});
							}

							function getPopularNews() {
								$scope.vlist_title = "Most Popular";
								oakHomeFactory
								.getPopularArticles('news',4)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {

																			// $scope.grid.items
																			// =
																			// response;
																			// $scope.newsbox.topitems
																			// =
																			// [];
																			// $scope.newsbox.bottomitems
																			// =
																			// [];

																			$scope.vlist_topitem = response[0];
																			$scope.vlist_items = response
																					.slice(
																							1,
																							5);

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting news slider from rest service');
												});
							}

							function getLatestNews() {
								$scope.newsbox_title = "Latest News";
								oakHomeFactory
								.getArticleCatByLimit('news',10)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {

																			// $scope.grid.items
																			// =
																			// response;
																			// $scope.newsbox.topitems
																			// =
																			// [];
																			// $scope.newsbox.bottomitems
																			// =
																			// [];

																			$scope.newsbox_topitems = response
																					.slice(
																							0,
																							4);
																			$scope.newsbox_bottomitems = response
																					.slice(
																							4,
																							4);

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting news slider from rest service');
												});
							}

							function getNewsSpotLight() {
								$scope.grid_title = 'NEWS SPOTLIGHT';
								oakHomeFactory
										.getPlacement("news_spotlight")
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {

																			$scope.grid_items = response;
																			// $scope.testPlacement
																			// ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting news slider from rest service');
												});
							}

						} ]);

/* News Controller Ends */

/* Entertainment Controller Starts */
oakHomeApp
		.controller(
				'oakEntertainmentCtrl',
				[
						'$scope',
						'$rootScope',
						'$http',
						'$stateParams',
						'$log',
						'oakHomeFactory',
						function($scope, $rootScope, $http, $stateParams, $log,
								oakHomeFactory) {

							getEntertainmentFooter(); // news
							getEntertainmentSlider(); // news
							getPopularEntertainment(); // news
							getLatestEntertainment(); // news
							getEntertainmentSpotLight(); // news

							function getEntertainmentFooter() {
								$scope.footerbox1_title = "Nollywood";
								$scope.footerbox2_title = "Fashion";
								$scope.footerbox3_title = "Movie Reviews";
								$scope.footerbox4_title = "Entertainment 1 on 1";

								oakHomeFactory
										.getArticleCatByLimit('nollywood', 5)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.footerbox1_items = response;

																			// $scope.testPlacement
																			// ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});

								oakHomeFactory
										.getArticleCatByLimit('fashion', 5)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.footerbox2_items = response;

																			// $scope.testPlacement
																			// ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});

								oakHomeFactory
										.getArticleCatByLimit('moviereviews', 5)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.footerbox3_items = response;

																			// $scope.testPlacement
																			// ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});

								oakHomeFactory
										.getArticleCatByLimit('entertainment1on1', 5)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.footerbox4_items = response;

																			// $scope.testPlacement
																			// ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});

							}

							function getEntertainmentSlider() {

								oakHomeFactory
										.getPlacement("entertainment_slider")
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.gallery = response;

																			// $scope.testPlacement
																			// ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting entertainment slider from rest service');
												});
							}

							function getPopularEntertainment() {
								$scope.vlist_title = "Trending Now";
								oakHomeFactory
										.getPopularArticles('entertainment',4)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {

																			// $scope.grid.items
																			// =
																			// response;
																			// $scope.newsbox.topitems
																			// =
																			// [];
																			// $scope.newsbox.bottomitems
																			// =
																			// [];

																			$scope.vlist_topitem = response[0];
																			$scope.vlist_items = response
																					.slice(
																							1,
																							5);

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting news slider from rest service');
												});
							}

							function getLatestEntertainment() {
								$scope.newsbox_title = "Latest in Entertainment";
								oakHomeFactory
								.getArticleCatByLimit('entertainment',10)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {

																			// $scope.grid.items
																			// =
																			// response;
																			// $scope.newsbox.topitems
																			// =
																			// [];
																			// $scope.newsbox.bottomitems
																			// =
																			// [];

																			$scope.newsbox_topitems = response
																					.slice(
																							0,
																							4);
																			$scope.newsbox_bottomitems = response
																					.slice(
																							4,
																							4);

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting news slider from rest service');
												});
							}

							function getEntertainmentSpotLight() {
								$scope.grid_title = 'ENTERTAINMENT SPOTLIGHT';
								oakHomeFactory
										.getPlacement("entertainment_spotlight")
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {

																			$scope.grid_items = response;
																			// $scope.testPlacement
																			// ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting news slider from rest service');
												});
							}

						} ]);

/* Entertainment Controller Ends */

oakHomeApp
		.controller(
				'oakBlogCtrl',
				[
						'$scope',
						'$rootScope',
						'$http',
						'$stateParams',
						'$log',
						'oakHomeFactory',
						function($scope, $rootScope, $http, $stateParams, $log,
								oakHomeFactory) {

							getBlogs(); // blog
							getMostPopularBlogCount(); // blog
							getMostPopularBlogsPost(); // blog

							$scope.blogID = $stateParams.blogID;
							if ($scope.blogID != ""
									&& $scope.blogID != undefined
									&& $scope.blogID != 'undefined') {
								getTopBlogPostsByID($scope.blogID);
							} else {
								getTopBlogPosts();
							}

							function getTopBlogPostsByID(blogId) {

								oakHomeFactory
										.getTopBlogsByID(blogId)
										.then(
												function success(response) {
													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.topblogs = [];
																			$scope.topblogs
																					.push(response);

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting blogs from rest service');
												});

							}

							function getMostPopularBlogsPost() {
								oakHomeFactory
										.getMostPopularBlogsPost()
										.then(
												function success(response) {
													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.popularBlogsPosts = response;

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting states from rest service');
												});

							}

							function getMostPopularBlogCount() {

								oakHomeFactory
										.getMostPopularBlogsDetails()
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.blogsCount = response;

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting states from rest service');
												});
							}

							function getBlogs() {
								oakHomeFactory
										.getBlogs()
										.then(
												function success(response) {
													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.blogs = response;

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting blogs from rest service');
												});
							}

							function getTopBlogPosts() {

								oakHomeFactory
										.getTopBlogs()
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.topblogs = response;

																			// $scope.testPlacement
																			// ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topblogs from rest service');
												});
							}

						} ]);