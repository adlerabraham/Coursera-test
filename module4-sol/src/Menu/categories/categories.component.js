(function () {
    'use strict';

    angular.module('menuApp')
    .component('categories',{
        templateUrl: "src/template/menu-categories.template.html",
        //controller: categoriesComponentController,
        bindings:{
            categoriesArray: '<',
            test: '@'
        }
    });

    // function categoriesComponentController() {
    //     var categories = this;
    //     console.log(categories.categoriesArray);
    // }
   
})();