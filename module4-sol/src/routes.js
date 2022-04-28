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
        });
    }
})();