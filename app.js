(function (){
'use strict';

  angular.module('myFirstApp', [])

  .controller('myFirstController', function($scope){
    $scope.name = "";
    $scope.total = 0;
    $scope.displayNumeric = function(){
      var totalValue = calculate($scope.name);
      $scope.total = totalValue;
    };

    function calculate(string){
      var val = 0;
      for (var i=0;i<string.length;i++){
        val += string.charCodeAt(i);
      }
      return val;
    }

  });

})();
