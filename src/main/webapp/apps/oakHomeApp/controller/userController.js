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
								userFactory
										.createUsers(this.user)
										.then(
												function success(response) {
													$('#Signup').modal('hide');
												},
												function error(response) {
													$log
															.debug('There is some issue while creating  user');
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
																			});
																}, 0); 
													}
												},
												function error(response) {
													$log
															.debug('User loginunsuccessful');
												});

							}

						} ]);
