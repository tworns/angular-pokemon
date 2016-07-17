{
  angular.module('pokemon')
    .controller('PokemonController', PokemonController);
    PokemonController.$inject = ['$scope'];
  function PokemonController($scope) {
    var vm = this;
    vm.message = "Welcome to Pokemon!";
  }
}
