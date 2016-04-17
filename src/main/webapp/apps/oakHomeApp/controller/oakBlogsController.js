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