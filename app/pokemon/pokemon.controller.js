(function() {
  'use strict';

  angular.module('pokemon.service')
    .controller('PokemonController', PokemonController);
    PokemonController.$inject = ['$scope', 'Poke'];
  function PokemonController($scope, Poke) {
    var vm = this;
  vm.allPokemon = Poke.get().results;
  console.log(vm.allPokemon);
  // for(var i = 0; i < vm.allPokemon.length; i++){
  //   console.log(vm.allPokemon[i]);
  // }
  //   vm.message = "Welcome to Pokemon!";
  //   vm.message = vm.apiInteraction.query();



  }
})();
