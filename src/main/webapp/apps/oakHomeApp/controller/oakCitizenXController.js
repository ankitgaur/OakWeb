/* CitizenX Controller Starts */

oakHomeApp
		.controller(
				'oakCitizenxCtrl',
				[
						'$scope',
						'$rootScope',
						'$http',
						'$stateParams',
						'$log',
						'oakHomeFactory',
						function($scope, $rootScope, $http, $stateParams, $log,
								oakHomeFactory) {
							
							getCitizenXSpotLight();
							getCitizenXWriteUps(); 
							getLatestIncidents();
							
							function getCitizenXWriteUps() {
								$scope.vlist_title = "Featured";
								oakHomeFactory
										.getArticleCatByLimit('incidents', 5)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			
																			$scope.vlist_topitem = response[0];
																			$scope.vlist_items = response.slice(1,4);
																			
																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topmid from rest service');
												});

							}	
							
							function getLatestIncidents() {
								$scope.newsbox_title = "From the Grass root";
								oakHomeFactory
								.getArticleCatByLimit('incidents',10)
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

							function getCitizenXSpotLight() {
								$scope.grid_title = 'CitizenX SPOTLIGHT';
								oakHomeFactory
										.getPlacement("citizenx_spotlight")
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
