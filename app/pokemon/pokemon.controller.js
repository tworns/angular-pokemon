(function() {
  'use strict';

  angular.module('pokemon.service')
    .controller('PokemonController', PokemonController);
    PokemonController.$inject = ['$scope', 'Poke', 'API'];
  function PokemonController($scope, Poke, API) {
    var vm = this;
    vm.bluitBase = API + "/posts/";
    vm.link = '';
    vm.title = '';
    vm.body = '';
    vm.submit = submit;
    vm.allPosts = Poke.query();
    vm.message = vm.allPosts;
  //  vm.post = Poke.get();

    console.log(vm.allPosts);
  // for(var i = 0; i < vm.allPokemon.length; i++){
  //   console.log(vm.allPokemon[i]);
  // }
  //   vm.message = "Welcome to Pokemon!";

  function submit () {
    console.log("::TITLE:: " + vm.title );
    console.log("::LINK:: "+ vm.link );
    console.log("::BODY:: "+ vm.body);
    // vm.post.data={
    //   title: vm.title,
    //   link: vm.link,
    //   body: vm.body,
    // };
    // vm.post.save().then(success(post), fail);
  }

  function success (){
    console.log("::SUCCESS!::" + post);
  }
  function fail(){
    console.log("::FAILED!::");
  }


  }
})();
