(function () {
    'use strict';


    angular.module('common')
    .controller('SignUpController',SignUpController);
    
    SignUpController.$inject = ['ClientDataService'];
    function SignUpController(ClientDataService) {
        var signUpCtrl = this;
        signUpCtrl.user={
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            favoriteDish: ''
        };
        signUpCtrl.msg = '';
        var menuItems = [];
        var i = 0;

        signUpCtrl.saveClient = function () {
            ClientDataService.getAllMenuItems().then(function (response) {
                console.log(response);
                menuItems = response.menu_items;
                i=0;
                while ((menuItems[i].short_name.toLowerCase() != signUpCtrl.user.favoriteDish.toLowerCase()) && i < menuItems.length - 1) {
                
                    i++;
                }
                if((i + 1 == menuItems.length)&&(menuItems[i].short_name.toLowerCase() != signUpCtrl.user.favoriteDish.toLowerCase()))
                {
                    signUpCtrl.msg = 'No such menu number exists';
                }
                else
                {
                    signUpCtrl.user.favoriteDishDetails = menuItems[i];
                    ClientDataService.addUser(signUpCtrl.user);
                    signUpCtrl.msg = 'Your informations has been saved';
                }
            });

            

        }
    }

})();