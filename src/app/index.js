'use strict';

angular.module('angularMaterial', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');

  })
  .run(function($rootScope){
  	$rootScope.data =  'Salut';
  });

