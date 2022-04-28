(function () {
    'use strict';

    angular.module('menuApp')
    .controller('ItemsStateController',ItemsStateController);

    ItemsStateController.$inject = ['resultItems','$stateParams'];
    function ItemsStateController(resultItems,$stateParams) {
        var items = this;

        items.itemsArray = resultItems.data.menu_items;
        items.shortName = $stateParams.categoryShortName;
    }
})();