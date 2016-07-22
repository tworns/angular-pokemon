(function() {
  'use strict';
   angular.module('pokemon', [
    'ui.router',
    'pokemon.service',
  ]).config(config);

  config.$inject= ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/bluit-remote');

    $stateProvider
      .state('notes', {
        url: '/bluit-remote',
        templateUrl: 'pokemon/pokemon.html',
        controller: 'PokemonController',
        controllerAs: 'vm',
      });
  }



})();
