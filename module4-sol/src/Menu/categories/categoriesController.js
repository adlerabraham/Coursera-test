(function () {
    'use strict';

    angular.module('menuApp')
    .controller('categoriesController',categoriesController);

    function categoriesController(resultCategories) {
        var categories= this;
        var categorieArray = [
            'a',
            'b',
            'c'
        ];

        categories.allCategories = categorieArray;
    }
})();