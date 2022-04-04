(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var BuyCtrl = this;
        
  BuyCtrl.ToBuylist = ShoppingListCheckOffService.getToBuyList();

  BuyCtrl.BuyItem = function(index){
    ShoppingListCheckOffService.addItemToBoughtList(BuyCtrl.ToBuylist[index]);
    ShoppingListCheckOffService.removeItemFromBuyList(index);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
   var BoughtCtrl = this;
   
   BoughtCtrl.BoughtList = ShoppingListCheckOffService.getBoughtList();
  
}


function ShoppingListCheckOffService() {
   var service = this;

        var ToBuyList = [
            {
              name: "Milk",
              quantity: "2"
            },
            {
              name: "Donuts",
              quantity: "2"
            },
            {
              name: "Cookies",
              quantity: "3"
            },
            {
              name: "Chocolate",
              quantity: "5"
            },
            {
              name: "Juice",
              quantity:"4"
            }
          ];

        var BoughtList = [];
        service.addItemToBoughtList = function (item) {
            BoughtList.push(item);
        };

        service.removeItemFromBuyList = function (index) {   
            ToBuyList.splice(index,1);
        };

        service.getToBuyList = function () {
            return ToBuyList;
        };
        
        service.getBoughtList = function () {
            return BoughtList;
        };
          
}

})();
