(function () {
    'use strict';

    angular.module('menuApp')
    .component('items',{
        templateUrl: 'src/template/menu-items.template.html',
        bindings:{
            items: '<'
        }
    });
})();