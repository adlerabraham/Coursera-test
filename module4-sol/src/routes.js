(function () {
    'use strict';

    angular.module('menuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject =['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'src/template/home.template.html'
        })
        .state('categories',{
            url: '/categories',
            templateUrl: 'src/template/menu-categories.state.template.html',
            controller: 'categoriesController as categories',
            resolve: {
                resultCategories:['menuDataService',function (menuDataService) {
                    return menuDataService.getAllCategories();
                }]
                
            }
        })
        .state('items',{
            url: '/items/{categoryShortName}',
            templateUrl: 'src/template/menu-items.state.template.html',
            controller: 'ItemsStateController as items',
            resolve: {
                resultItems:['$stateParams','menuDataService',function ($stateParams,menuDataService) {
                    return menuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        });
    }
})();