oakHomeApp
		.factory(
				'oakHomeFactory',
				[
						'$http',
						'$log',
						function($http, $log) {

							var oakHomeFactory = {};

							oakHomeFactory.getPlacementImgByID = function(
									placementID) {
								var url = AppConfig.appUrl + 'placements';
								url = url + "/" + placementID;
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

							}

							oakHomeFactory.getTopStories = function() {
								var url = AppConfig.appUrl
										+ 'placements/section/topstories';

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

							oakHomeFactory.getTopMid = function() {
								var url = AppConfig.appUrl
										+ 'placements/section/topmid';

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
										+ 'placements/section/videolist';

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

							oakHomeFactory.getTopLeft = function() {
								var url = AppConfig.appUrl
										+ 'placements/section/topleft';

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

							oakHomeFactory.getHomeAds = function() {
								var url = AppConfig.appUrl
										+ 'placements/section/homead';

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

							oakHomeFactory.getHomeSlider = function() {
								var url = AppConfig.appUrl
										+ 'placements/section/homeslider';

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

							return oakHomeFactory;

						} ]);
