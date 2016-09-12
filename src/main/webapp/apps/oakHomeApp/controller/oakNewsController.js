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

																			$scope.articlegrid = response;
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
							
							$scope.openArticlePopup = function(link) {
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
							
//							$scope.slideup = function(el){
//								console.log("Slide up");
//								   $('.gridbox-text').animate({position: absolute; top: 120px; },500);
//								
//							}
							
							$scope.openModelPopup = function(link) {
								oakHomeFactory
										.getContent(link)
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

						} ]);

/* News Controller Ends */
