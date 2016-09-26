oakHomeApp
		.controller(
				'userCtrl',
				[
						'$scope',
						'$rootScope',
						'$http',
						'$stateParams',
						'$log',
						'userFactory',
						function($scope, $rootScope, $http, $stateParams, $log, userFactory) {

							
							$scope.createUser = function(userFormObj) {
							
								userFormObj.grecaptcharesponse=grecaptcha.getResponse();
								userFactory
										.createUsers(userFormObj)
										.then(
												function success(response) {
													$('#Signup').modal('hide');
													
													
													
													
													
												},
												function error(response) {
													
													
												});
							}

							$scope.logout= function(){
								location.reload();
							}
							
							$scope.login = function(user) {
								
								userFactory
										.login(user)
										.then(
												function success(response) {
													if (response != undefined || response != null) {
														setTimeout(
																function() {
																	$scope
																			.$apply(function() {
																				$rootScope.userName = response.name;	
																				$state.reload();
																			});
																}, 0); 
													}
												},
												function error(response) {
													
															
												});

							}

						} ]);
