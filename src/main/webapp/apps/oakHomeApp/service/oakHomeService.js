oakHomeApp
		.factory(
				'oakHomeFactory',
				[
						'$http',
						'$log',
						function($http, $log) {

							var oakHomeFactory = {};							

							oakHomeFactory.createBlogPost = function(blogData) {
								var url = AppConfig.appUrl + 'blog_entries';
								var req = {
									method : 'POST',
									url : url,
									data : blogData
								}

								return $http(req)
										.then(
												function success(response) {
													$log
															.debug('blog entry created successfully ');
												},
												function error(response) {
													$log
															.debug('There is some issue while getting data from rest service');
												});
							};
							
							oakHomeFactory.getPostsForTopic = function(id) {
								var url = AppConfig.appUrl + 'forum_post/'+id+'/'+100;

								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting forum topics from rest service');
												});

							};
							
							oakHomeFactory.getTopic = function(id) {
								var url = AppConfig.appUrl + 'forum_topics/'+id;

								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting forum topics from rest service');
												});

							};

							
							oakHomeFactory.getTopicsForCategory = function(id) {
								var url = AppConfig.appUrl + 'forum_topics/'+id+'/'+100;

								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting forum topics from rest service');
												});

							};

							oakHomeFactory.getCategories = function() {
								var url = AppConfig.appUrl + 'forum_categories';

								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting forum categories from rest service');
												});

							};
							
							oakHomeFactory.getBlogs = function() {
								var url = AppConfig.appUrl + 'blogs';

								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting blog category from rest service');
												});

							};

							oakHomeFactory.getMostPopularBlogsPost = function() {
								var url = AppConfig.appUrl
										+ 'popular_blog_entries';
								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting data from rest service');
												});

							}

							oakHomeFactory.getMostPopularBlogsDetails = function() {
								var url = AppConfig.appUrl + 'blogcounts';
								// url = url+"/"+placementID;
								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting data from rest service');
												});

							};

							oakHomeFactory.getArticlesByLimit = function(limit) {
								var url = AppConfig.appUrl
										+ 'articles/limit/' + limit;

								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting data from rest service');
												});

							};
							
							oakHomeFactory.getPlacement = function(section) {
								var url = AppConfig.appUrl
										+ 'placements/section/' + section;

								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting data from rest service');
												});

							};

							oakHomeFactory.getTopBlogs = function() {
								var url = AppConfig.appUrl + 'blog_entries';

								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting data from rest service');
												});

							};

							oakHomeFactory.getVideoList = function() {
								var url = AppConfig.appUrl
										+ 'videos/limit/3';

								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting videos from rest service');
												});

							};
							
							oakHomeFactory.getPopularArticles = function(cat,limit) {
								var url = AppConfig.appUrl
										+ 'popular_articles/'+cat+'/'+limit;

								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting data from rest service');
												});

							};
							
							oakHomeFactory.getArticleCatByLimit = function(cat,limit) {
								var url = AppConfig.appUrl
										+ 'articles/'+cat+'/'+limit;

								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting data from rest service for category '+cat);
												});

							};
														
							oakHomeFactory.getArticle = function(id) {
								var url = AppConfig.appUrl + 'articles/' + id;

								return $http({
									method : 'GET',
									url : url,
									crossDomain : true
								})
										.then(
												function successCallback(
														response) {
													return response.data;
												},
												function errorCallback(response) {
													$log
															.debug('There is some issue while getting data from rest service');
												});

							};
							
							oakHomeFactory.getPostsForBlog = function(blogID){
								 var url = AppConfig.appUrl+'/blog_entries/blogs';
								 url = url+"/"+blogID;
								return $http({
									  method: 'GET',
									  url: url,
									  crossDomain:true
									  }).then(function successCallback(response) {
										  return response.data;
								  }, function errorCallback(response) {
									  $log.debug('There is some issue while getting blog category from rest service');
								  }); 
							  
							};
													
							oakHomeFactory.getBlogPostByID = function(blogPostID){
								 var url = AppConfig.appUrl+'blog_entries';
								 url = url+"/"+blogPostID;
								return $http({
									  method: 'GET',
									  url: url,
									  crossDomain:true
									  }).then(function successCallback(response) {
										  return response.data;
								  }, function errorCallback(response) {
									  $log.debug('There is some issue while getting blog category from rest service');
								  }); 
							  
							};
							
							return oakHomeFactory;

						} ]);
