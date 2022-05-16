(function () {
    'use strict';

    angular.module('common')
    .controller('MyInfosController',MyInfosController);

    MyInfosController.$inject = ['clientInfos','basePath'];
    function MyInfosController(clientInfos, basePath) {
        var myInfosCtrl = this;

        myInfosCtrl.User = clientInfos;
        myInfosCtrl.basePath = basePath;
        console.log(clientInfos);

    }
})();