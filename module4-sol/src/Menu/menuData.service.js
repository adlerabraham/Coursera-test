(function () {
    'use strict';

    angular.module('data')
    .service('menuDataService',MenuDataService)
    .constant('basePath','https://davids-restaurant.herokuapp.com');

    MenuDataService.$inject = ['$http', 'basePath'];
    function MenuDataService($http, basePath) {
        var service = this;

        service.getAllCategories = function () {
            var response = $http({
                methode: 'GET',
                url: (basePath + "/categories.json")
            });

            return response;
        };

        service.getItemsForCategory = function (categoryShortName) {
            var response = $http({
                methode: 'GET',
                url: (basePath + "/menu_items.json?category=" + categoryShortName)
            });

            return response;
        };
    }
})();