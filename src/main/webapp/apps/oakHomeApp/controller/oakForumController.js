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
							
							$scope.currentPage = 1;
							$scope.pageSize = 10;
							$scope.catID = $stateParams.catID;
							$scope.topicID = $stateParams.topicID;
							$scope.pageChangeHandler = function(num) {
								console.log('going to page ' + num);
							  };
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
																			$scope.topicID = response.id;

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

							$scope.createTopic = function(forumTopicObj) {

								forumTopicObj.category = $scope.catID;
								oakHomeFactory
										.createTopic(forumTopicObj)
										.then(
												function success(response) {

													getTopics($scope.catID);
													clearForumTopicForm(forumTopicObj);
													$('#createForumTopicModal')
															.modal('hide');
												},
												function error(response) {
													$log
															.debug('There is some issue while creating  forumTopic ');
												});
							};

							$scope.quickReply = function(forumPostFormObj){
								forumPostFormObj.topic = $scope.topicID; 
								oakHomeFactory.createForumPosts(forumPostFormObj)
										.then(function success(response) {
															
											getPosts($scope.topicID);
											clearForumPostForm(forumPostFormObj);
											$('#createForumPostModal').modal('hide');
										}, function error(response) {
								 $log.debug('There is some issue while crating  article ');
							  }); 
							}
							
							$scope.createForumPost = function(forumPostFormObj){
								forumPostFormObj.topic = $scope.topicID; 
								forumPostFormObj.content = CKEDITOR.instances.editor1.getData();
								oakHomeFactory.createForumPosts(forumPostFormObj)
										.then(function success(response) {
															
											getPosts($scope.topicID);
											clearForumPostForm(forumPostFormObj);
											$('#createForumPostModal').modal('hide');
										}, function error(response) {
								 $log.debug('There is some issue while crating  article ');
							  }); 
							}
							
							$scope.deletePost= function(forumPostID){
								
								oakHomeFactory.deleteForumPostByID(forumPostID).then(function success(response) {
									$log.debug("Post deleted successfully");
									getPosts($scope.topicID);
									
							  }, function error(response) {
									$log.debug('There is some issue while getting forumPosts from rest service');
							  });
							}
							$scope.resetForm = function(forumPostFormObj){
								clearForumPostForm(forumPostFormObj);
							}
							
							$scope.deleteTopic = function() {
								forumTopicID = $scope.topicID;
								oakHomeFactory
										.deleteTopicByID(forumTopicID)
										.then(
												function success(response) {
													$log
															.debug("Topic deleted successfully");
													getAllForumTopics();

												},
												function error(response) {
													$log
															.debug('There is some issue while getting forumTopics from rest service');
												});
							}

							$scope.resetForm = function(forumTopicObj) {
								if ($scope.catID != "" && $scope.catID != undefined
										&& $scope.catID != 'undefined') {
									clearForumTopicForm(forumTopicObj);
								} else if ($scope.topicID != ""
										&& $scope.topicID != undefined
										&& $scope.topicID != 'undefined') {
									clearForumPostForm(forumTopicObj)
								}
								
							};

							function clearForumPostForm(forumPostFormObj) {
								forumPostFormObj.topic = null;
								forumPostFormObj.title = null;
								forumPostFormObj.displayImage = null;
								//CKEDITOR.instances.editor1.getData();
								CKEDITOR.instances.editor1.setData('');
							}

							function clearForumTopicForm(forumTopicObj) {
								forumTopicObj.category = null;
								forumTopicObj.title = null;
								forumTopicObj.displayImage = null;
							}

						} ]);