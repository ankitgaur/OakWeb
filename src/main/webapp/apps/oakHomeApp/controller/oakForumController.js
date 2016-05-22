oakHomeApp
		.controller(
				'oakForumCtrl',
				[
						'$scope',
						'$rootScope',
						'$http',
						'$stateParams',
						'$log',
						'oakHomeFactory',
						function($scope, $rootScope, $http, $stateParams, $log,
								oakHomeFactory) {

							$scope.catID = $stateParams.catID;
							$scope.topicID = $stateParams.topicID;
							
							if ($scope.catID != "" && $scope.catID != undefined
									&& $scope.catID != 'undefined') {
								getTopics($scope.catID);
							} else if ($scope.topicID != ""
									&& $scope.topicID != undefined
									&& $scope.topicID != 'undefined') {
								getPosts($scope.topicID);
								getTopic($scope.topicID);
							} else {
								getCategories();
							}

							function getPosts(id) {
								oakHomeFactory
										.getPostsForTopic(id)
										.then(
												function success(response) {
													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.posts = response;

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting posts for topic from rest service');
												});
							}
							
							function getTopic(id) {
								oakHomeFactory
										.getTopic(id)
										.then(
												function success(response) {
													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.topic = response.title;
																			$scope.category = response.category;

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting forum topic from rest service');
												});
							}

							function getTopics(id) {
								oakHomeFactory
										.getTopicsForCategory(id)
										.then(
												function success(response) {
													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.topics = response;

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting forum topics from rest service');
												});
							}

							function getCategories() {
								oakHomeFactory
										.getCategories()
										.then(
												function success(response) {
													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.categories = response;

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting forum categories from rest service');
												});
							}

						} ]);