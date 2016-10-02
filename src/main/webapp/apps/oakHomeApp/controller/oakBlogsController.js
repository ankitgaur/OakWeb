oakHomeApp
		.controller(
				'oakBlogCtrl',
				[
						'$scope',
						'$rootScope',
						'$state',
						'$http',
						'$stateParams',
						'$log',
						'oakHomeFactory',
						function($scope, $rootScope, $state, $http, $stateParams, $log,
								oakHomeFactory) {
							
							$scope.currentPage = 1;
							$scope.pageSize = 10;
							
							//popsize=7;
							
							$scope.pageChangeHandler = function(num) {
								console.log('going to page ' + num);
							  };

							getBlogs(); // blog
							getMyBlogs();
							getMostPopularBlogCount(); // blog
							//getMostPopularBlogsPost(); // blog

							$scope.blogPostID = $stateParams.blogPostID;
							$scope.blogID = $stateParams.blogID;
							
							if($state.current.name == 'myblogs'){
								
								getMyBlogPosts();
								
							} else if ($scope.blogPostID != ""
									&& $scope.blogPostID != undefined
									&& $scope.blogPostID != 'undefined') {
								getMostPopularBlogsPost(2);
								getBlogPostByID($scope.blogPostID);
							} else if($scope.blogID != ""
								&& $scope.blogID != undefined
								&& $scope.blogID != 'undefined'){
								getPostsForBlog($scope.blogID);	
								getMostPopularBlogsPost(7);
							} else {
								getTopBlogPosts();
								getMostPopularBlogsPost(7);
							}

							function getMyBlogPosts() {

								oakHomeFactory
										.getMyBlogPosts()
										.then(
												function success(response) {
													$scope.title = 'My blog posts';
													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.topblogs = response;											

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting myblogs from rest service');
												});
							}
							
							function getPostsForBlog(blogID) {

								oakHomeFactory
										.getPostsForBlog(blogID)
										.then(
												function success(response) {

													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.topblogs = response;											

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting topblogs from rest service');
												});
							}
							
							function getBlogPostByID(blogPostId) {

								oakHomeFactory
										.getBlogPostByID(blogPostId)
										.then(
												function success(response) {
													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.topblogs = [];
																			$scope.topblogs
																					.push(response);
																			$scope.title = $scope.topblogs[0].blogname;
																			

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting blogs from rest service');
												});

							}

							function getMostPopularBlogsPost(popsize) {
								oakHomeFactory
										.getMostPopularBlogsPost()
										.then(
												function success(response) {
													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.popularBlogsPosts = response.slice(0,popsize);

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

							function getMyBlogs() {
								oakHomeFactory
										.getMyBlogs()
										.then(
												function success(response) {
													setTimeout(
															function() {
																$scope
																		.$apply(function() {
																			$scope.myblogs = response;

																		});
															}, 0);

												},
												function error(response) {
													$log
															.debug('There is some issue while getting blogs from rest service');
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
													$scope.title = 'Most recent blog posts';
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
							
							$scope.createBlog = function(blog){
								
								var file =  $("#displayImage").get(0).files[0];
								var bdata = new FormData();
								
								bdata.append('category','ip2n');
								bdata.append('title',blog.title);
								bdata.append('description',blog.description);
								bdata.append('displayImage', file);
								
								//blog.category = 'ip2n';
								//blog.displayImage=file;
								
								//console.log(this.blog);
								oakHomeFactory.createBlog(bdata)
										.then(function success(response) {
															
											getBlogs(); // blog
											getMyBlogs();
											getMostPopularBlogCount(); // blog
											getMostPopularBlogsPost(); // blog
											
											clearForm(blog);
											$('#createBlogsModal').modal('hide');
										}, function error(response) {
								 $log.debug('There is some issue while crating  blogCategory');
							  }); 
							}
							
							$scope.resetBEForm = function(blogFormObj){
								clearBlogForm(blogFormObj);
							}
							
							$scope.resetBForm = function(blogFormObj){
								clearForm(blogFormObj);
							}
							
							$scope.createBlogEntry= function(blog){
								blog.blogname = $("#blogdd option:selected").text();
								blog.content = CKEDITOR.instances.editor1.getData();
								
								var file =  $("#displayImage").get(0).files[0];
								var bdata = new FormData();
								
								bdata.append('blog',blog.blog);
								bdata.append('blogname',blog.blogname);
								bdata.append('title',blog.title);
								bdata.append('content',blog.content);
								bdata.append('displayImage', file);
								
								oakHomeFactory.createBlogPost(bdata)
										.then(function success(response) {
											
											getBlogs(); // blog
											getMyBlogs();
											getMostPopularBlogCount(); // blog
											getMostPopularBlogsPost(); // blog
											clearBlogForm(blogFormObj);
											$('#createBlogEntriesModal').modal('hide');
										}, function error(response) {
								 $log.debug('There is some issue while crating blogEntry');
							  }); 
							}
							
							function clearForm(blogFormObj){
								blogFormObj.rating=null;
								blogFormObj.hits=null;
								blogFormObj.description=null;
								blogFormObj.displayimage=null;		
							}
							
							function clearBlogForm(blogFormObj){
								blogFormObj.blog=null;
								blogFormObj.createdBy=null;
								blogFormObj.title=null;
								blogFormObj.displayImage=null;
								blogFormObj.updatedBy=null;
								blogFormObj.updatedOn=null;
								CKEDITOR.instances.editor1.setData("Enter Text");
						}

						} ]);