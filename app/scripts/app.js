'use strict';

angular.module('tatetiApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/fin-del-juego', {
        templateUrl: 'views/fin-del-juego.html',
        controller: 'FinjuegoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
