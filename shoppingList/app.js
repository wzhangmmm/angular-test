(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyController = this;

  toBuyController.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyController.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtController = this;

  boughtController.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {name: "cookies", quantity: 10},
    {name: "bottles of water", quantity: 3},
    {name: "cans of orange juice", quantity: 6},
    {name: "pounds of beef", quantity: 2},
    {name: "broccolis", quantity: 2},
    {name: "cake", quantity: 1}
  ];

  var boughtItems = [];

  service.buyItem = function (itemIdex) {
    var arr = toBuyItems.splice(itemIdex, 1);
    boughtItems.push(arr[0]);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
