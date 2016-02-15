var app = angular.module('msrs', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      access: {restricted: false},
      controller: 'msrsController',
      redirectTo: '/home'
    })
    .when('/home', {
      templateUrl: '/views/partials/home.html',
      controller: 'homeController',
      access: {restricted: false}
    })
    .otherwise({
      redirectTo: '/'
    });
});