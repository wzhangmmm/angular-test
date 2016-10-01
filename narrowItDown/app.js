(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html'
    // scope: {
    //   found: '<',
    //   onRemove: '&'
    // }
  };
  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchTerm = "";
  list.found = [];

  list.narrowItDown = function () {
    if (list.searchTerm === "") {
      return;
    }
    var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

    promise.then(function (result) {
      list.found = result;
      console.log("found:");
      console.log(list.found);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  list.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    list.found.splice(itemIndex, 1);
  };

  list.nothingFound = function () {
    if (list.searchTerm == "") {
      return true;
    }

    if (list.found.length == 0) {
      return true;
    }

    return false;
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    console.log("searchTerm: " + searchTerm);
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      // process result and only keep items that match
      console.log(result.data);
      var foundItems = [];
      result.data.menu_items.forEach(function (item, index) {
        if (item.description.indexOf(searchTerm) != -1) {
          foundItems.push(item);
        }
      });
      // return processed items
      return foundItems;
    });

    return response;
  };
}

})();
