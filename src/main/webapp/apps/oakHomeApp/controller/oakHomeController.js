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
							
							getTopStories(); // home
							getArticleGrid(); // home							
							getTopSlides();
							getHomeAds(); // home
							getGallery(); // home
							getVideos(); // home
		
							$scope.stateId = 'NG-BA';
							$scope.iframeurl = "http://www.ipledge2nigeria.com/state.html#NG-BA";
							
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

