(function(){
  angular.module('pokemon.service').factory('Poke', Poke);
  Poke.$inject = ['$resource', 'API'];
  function Poke ($resource, API){

    return $resource(API);
  }

})();
