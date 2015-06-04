angular.module('meanGarden', ['ui.router', 'ngMap'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('garden-index', {
          url: '/',
          templateUrl: '../templates/garden-index.html',
          controller: 'GardenIndexCtrl'
        })

        .state('gardens-new', {
          url: '/gardens/new',
          templateUrl: '../templates/garden-new.html',
          controller: 'NewGardenCtrl'
        })
        
        // .state('gardens', {
        //   url: '/gardens/:id',
        //   templateUrl: '/garden-show.html',
        //   controller: 'GardenShowCtrl'
        // });

      $urlRouterProvider.otherwise('/');
    }
  ]);

