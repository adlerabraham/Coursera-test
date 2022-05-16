(function () {
    'use strict';

    angular.module('common')
    .service('ClientDataService',ClientDataService)
    .constant('basePath','https://adler-course5.herokuapp.com');

    ClientDataService.$inject = ['basePath','$http']
    function ClientDataService(basepath,$http) {
        var service= this;

        var User = {};

        service.addUser = function (user) {
            User = user;
            console.log(User);
            
        };

        service.getUser = function () {
            return User;
        };

        service.getAllMenuItems = function () {
            return $http({
                method: 'GET',
                url: (basepath + '/menu_items.json')
            })
            .then(function (response) {
                return response.data;
            });
            
        };

        
    }


})();