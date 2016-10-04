(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);

ItemsListController.$inject = ['MenuDataService', 'category', 'itemsForCategory'];
function ItemsListController(MenuDataService, category, itemsForCategory) {
  var items = this;
  console.log("ItemsListController: ", category);

  items.category = category;
  items.itemsForCategory = itemsForCategory;
}

})();
