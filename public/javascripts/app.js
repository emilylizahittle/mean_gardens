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

        .state('gardens-new', {
          url: '/',
          templateUrl: 'garden-new.html',
          controller: 'NewGardenCtrl'
        }),

      $urlRouterProvider.otherwise('/');
    }
  ]);

