(function() {
  'use strict';
   angular.module('pokemon', [
    'ui.router',
    'pokemon.service',
  ]).config(config);

  config.$inject= ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/pokemon');

    $stateProvider
      .state('notes', {
        url: '/pokemon',
        templateUrl: 'pokemon/pokemon.html',
        controller: 'PokemonController',
        controllerAs: 'vm',
      });
  }



})();
