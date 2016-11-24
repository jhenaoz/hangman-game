'use strict';
angular.module('hangman').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'scripts/home/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  }).state('hangman', {
    url: '/hangman',
    templateUrl: 'scripts/hangman/hangman.html',
    controller: 'HangmanController',
    controllerAs: 'hangman'
  });
}