(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope) {
  $scope.dishes = "";
  $scope.message = "";

  $scope.checkDishes = function () {
    if ($scope.dishes == "") {
      $scope.message = "Please enter data first";
    }
    else {
      console.log($scope.dishes.split(','));
      var num = $scope.dishes.split(',').length;
      console.log(num);
      if (num > 3) {
        $scope.message = "Too much!";
      }
      else {
        $scope.message = "Enjoy!";
      }
    }
  };
}

})();
