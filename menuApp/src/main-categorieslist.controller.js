(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesListController', MainCategoriesListController);


MainCategoriesListController.$inject = ['MenuDataService', 'allCategories'];
function MainCategoriesListController(MenuDataService, allCategories) {
  var categories = this;
  //console.log("MainCategoriesListController: ", allCategories);
  categories.allCategories = allCategories;
}

})();
