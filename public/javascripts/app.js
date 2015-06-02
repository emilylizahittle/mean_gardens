angular.module('meanGarden', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('garden-index', {
          url: '/',
          templateUrl: '/garden-index.html',
          controller: 'GardenIndexCtrl'
        })

      $urlRouterProvider.otherwise('home');
    }
  ]);

