angular.module('meanGarden', ['ui.router', 'ngMap'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('garden-index', {
          url: '/',
          templateUrl: 'garden-index.html',
          controller: 'GardenIndexCtrl'
        })

        .state('garden-new', {
          url: '/gardens/new',
          templateUrl: 'garden-new.html',
          controller: 'NewGardenCtrl'
        }),

      $urlRouterProvider.otherwise('home');
    }
  ]);

