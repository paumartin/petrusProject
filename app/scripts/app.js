'use strict';

/**
 * @ngdoc overview
 * @name petrusProjectApp
 * @description
 * # petrusProjectApp
 *
 * Main module of the application.
 */
angular
  .module('petrusProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/zone/:id',{
        templateUrl: 'views/zone.html',
        controller: 'ZoneCtrl'
      })
      .when('/zone/:id/revisio',{
        templateUrl: 'views/revisio.html',
        controller: 'RevisioController'
      })
      .otherwise({
        redirectTo: '/'
      });
       //$locationProvider.html5Mode(true);
  });
