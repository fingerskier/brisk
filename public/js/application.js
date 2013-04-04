'use strict';

var brisk = angular.module('brisk', ['brisk.filters', 'brisk.services', 'brisk.directives']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when(interlude.URL + '/:root')
	.when(interlude.URL + '/:root/:branch')
	.when(interlude.URL + '/:root/:branch/:leaf')
	.otherwise({redirectTo: interlude.URL + '/'});

	$locationProvider.html5Mode(true);
}])
.run(function($location, $log, $rootScope) {
	$rootScope.navigate = function(path) {
	$location.path(path);
	};
});