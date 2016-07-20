(function(){
  angular.module('pokemon.service').factory('Poke', Poke);
  Poke.$inject = ['$resource', 'API'];
  function Poke ($resource, API){
    var Poke = $resource(`${API}/posts.json:format`, null); //FIX :format to actually work
    return Poke;
  }

})();
