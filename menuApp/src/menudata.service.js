(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    console.log("getAllCategories");
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
      //console.log(result.data);
      return result.data;
    });

    return response;
  };

  service.getItemsForCategory = function (categoryShortName) {
    console.log("getItemsForCategory: ", categoryShortName);
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    }).then(function (result) {
      //console.log(result.data);
      return result.data.menu_items;
    });

    return response;
  };

}

})();
