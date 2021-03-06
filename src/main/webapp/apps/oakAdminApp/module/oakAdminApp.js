var oakAdminApp = angular.module('oakAdminApp', ['ui.router','angularUtils.directives.dirPagination']);
oakAdminApp.config(['$httpProvider', function ($httpProvider) {
	if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }  	
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
	$httpProvider.defaults.withCredentials = true;
	$httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.useXDomain = true;
	
}]);

oakAdminApp.run(function($http) {
	delete $http.defaults.headers.common['X-Requested-With']; 
	$http.defaults.headers.put = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
    };
	$http.defaults.useXDomain = true;
	//delete $http.defaults.headers.common['X-Requested-With']; 
});

/*oakAdminApp.directive('fileModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function(){
             scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
 }]);*/
