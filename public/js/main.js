angular.module('alurapic', ['myDirectives','ngRoute','ngAnimate'])
.config(function($locationProvider, $routeProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/images', {
		templateUrl: 'partials/image/home.html',
		controller: 'ImagesController'
	});

	$routeProvider.when('/images/new', {
		templateUrl: 'partials/image/register.html',
		controller: 'ImageController'
	});

	$routeProvider.when('/images/edit/:imageId', {
		templateUrl: 'partials/image/register.html',
		controller: 'ImageController'
	});

	 $routeProvider.otherwise({redirectTo:'/images'});
});