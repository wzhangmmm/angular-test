(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);


SignupService.$inject = ['MenuService'];
function SignupService(MenuService) {
  var service = this;
  var user;
  var registered = false;
  var favoriteDish;

  service.setUser = function (theUser) {
    console.log('setUser:', theUser);
    user = theUser;
    registered = true;
  };
  service.getUser = function () {
    console.log('getUser:', user);
    return user;
  };
  service.isRegistered = function () {
    return registered;
  };

  service.setFavoriteDish = function (theFavoriteDish) {
    console.log('setFavoriteDish:', theFavoriteDish);
    favoriteDish = theFavoriteDish;
  };

  service.getFavoriteDish = function () {
    return favoriteDish;
  };
}



})();
