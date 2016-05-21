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

							getCategories(); // blog

							$scope.catID = $stateParams.catID;

							/*
							 * if ($scope.blogPostID != "" && $scope.blogPostID !=
							 * undefined && $scope.blogPostID != 'undefined') {
							 * getBlogPostByID($scope.blogPostID); } else
							 * if($scope.blogID != "" && $scope.blogID !=
							 * undefined && $scope.blogID != 'undefined'){
							 * getPostsForBlog($scope.blogID); } else {
							 * getTopBlogPosts(); }
							 */

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