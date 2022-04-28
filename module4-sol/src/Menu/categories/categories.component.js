(function () {
    'use strict';

    angular.module('menuApp')
    .component('categories',{
        templateUrl: "src/template/menu-categories.template.html",
        bindings:{
            categoriesArray: '<',
            test: '@'
        }
    });
   
})();