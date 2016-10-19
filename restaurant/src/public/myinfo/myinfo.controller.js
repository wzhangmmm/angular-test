(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['user', 'isRegistered', 'favoriteDish', 'ApiPath'];
function MyinfoController(user, isRegistered, favoriteDish, ApiPath) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.isRegistered = isRegistered;
  $ctrl.favoriteDish = favoriteDish;
  $ctrl.basePath = ApiPath;
}


})();
