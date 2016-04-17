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

						} ]);

/* Entertainment Controller Ends */