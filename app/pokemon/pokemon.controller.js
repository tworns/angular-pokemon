{
  angular.module('pokemon')
    .controller('PokemonController', PokemonController);
    PokemonController.$inject = ['$scope', 'Pokemon'];
  function PokemonController($scope, Pokemon) {
    var vm = this;
    vm.message = "Welcome to Pokemon!";
  //  vm.message = Pokemon.working();
  }
}
