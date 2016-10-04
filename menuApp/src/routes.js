(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/main-categorieslist.template.html',
    controller: 'MainCategoriesListController as categories',
    resolve: {
      allCategories: ['MenuDataService', function (MenuDataService) {
        console.log("state categories");
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categories.items', {
    url: '/items/{index}',
    templateUrl: 'src/templates/itemslist.template.html',
    controller: 'ItemsListController as items',
    // params: {
    //   index: null
    // },
    resolve: {
      category: ['$stateParams', 'allCategories', function ($stateParams, allCategories) {
        console.log("category: ", $stateParams.index);
        return allCategories[$stateParams.index].name;
      }],
      itemsForCategory: ['$stateParams', 'MenuDataService', 'allCategories', function ($stateParams, MenuDataService, allCategories) {
        console.log("itemsForCategory: ", $stateParams.index);
        var categoryShortName = allCategories[$stateParams.index].short_name;
        console.log("categoryShortName: ", categoryShortName);
        return MenuDataService.getItemsForCategory(categoryShortName);
      }]
    }
  });

}

})();
