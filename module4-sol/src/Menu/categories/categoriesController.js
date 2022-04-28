(function () {
    'use strict';

    angular.module('menuApp')
    .controller('categoriesController',CategoriesController);

    CategoriesController.$inject = ['resultCategories'];
    function CategoriesController(resultCategories) {
        var categories= this;
        var categoriesArray = resultCategories.data;
        
        categories.allCategories = categoriesArray;
    }
})();