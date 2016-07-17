{
  angular.module('pokemon').factory('Pokemon', Pokemon);
  Pokemon.$inject = ['$scope'];
  function Pokemon ($scope){
    var service = {
      working: working,
    };
    return service;
  }
  function working(){
    return 'working';
  }
}
