'use strict';

var brisk = angular.module('brisk', ['brisk.directives', 'brisk.filters', 'brisk.services', 'firebase']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/:root')
	.when('/:root/:branch')
	.when('/:root/:branch/:leaf')
	.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(true);
}])
.run(function(AppData, $location, $log, News, $rootScope) {
	$rootScope.app = {};
	$rootScope.news = {};

	$rootScope.navigate = function(path) {
		$location.path(path);
	};
});