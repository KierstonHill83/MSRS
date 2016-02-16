var app = angular.module('msrs', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'homeController',
      templateUrl: '/views/partials/home.html',
      access: {restricted: false},
    })
    .otherwise({
      redirectTo: '/'
    });
});