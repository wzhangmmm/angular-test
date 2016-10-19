(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService', 'MenuService'];
function SignupController(SignupService, MenuService) {
  var $ctrl = this;
  $ctrl.favoriteExists = true;

  $ctrl.submit = function () {
    console.log('user:', $ctrl.user);
    SignupService.setUser($ctrl.user);
    $ctrl.completed = true;

    MenuService.getMenuItem($ctrl.user.favorite).then(function (item) {
      console.log('getMenuItem item:', item);
      $ctrl.favoriteExists = true;
      SignupService.setFavoriteDish(item);
    }, function (error) {
      console.log('getMenuItem error');
      $ctrl.favoriteExists = false;
    });

  };
}


})();
