var articleApp = angular.module('articleApp', ['ui.router']);
articleApp.config(['$httpProvider', function ($httpProvider) {
	 if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }  	
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	
	$httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1867 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
	$httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
	 $httpProvider.defaults.headers.put['Accept'] = 'application/json, text/javascript';
	$httpProvider.defaults.headers.put['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.useXDomain = true;
}]);

articleApp.run(function($http) {
  $http.defaults.headers.put = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
    };
	$http.defaults.useXDomain = true;
	//delete $http.defaults.headers.common['X-Requested-With']; 
});