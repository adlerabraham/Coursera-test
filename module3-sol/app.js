(function () {
    'using strict';

    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItemsDirective',FoundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    function FoundItemsDirective() {
        var ddo={
            templateUrl: 'template.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveContoller,
            bindToController: true,
            controllerAs: 'directiveCtrl'
        };
        return ddo;
    }

    function FoundItemsDirectiveContoller() {
        
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;

        narrowCtrl.searchTerm = "";
        narrowCtrl.narrowItDown =function () {
            var  promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm);
            promise.then(function(result) {
                console.log(result);
                narrowCtrl.found = result;
            })
            .catch(function (error) {
                console.log("Something went wrong.")
            });
        };

        narrowCtrl.remove = function (itemIndex) {
            narrowCtrl.found.splice(itemIndex,1);
        };

          
    }

    MenuSearchService.$inject = ['$http','ApiBasePath'];
    function MenuSearchService($http,ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems= function (searchTerm){
            return $http({
                method: "GET",
                url: (ApiBasePath +"/menu_items.json")
            }).then(function (result) {
                var foundItems = [];
                var menuItems= result.data.menu_items;
                for(var i=0; i<menuItems.length ; i++)
                {
                    if(menuItems[i].description.indexOf(searchTerm) !== -1)
                    {
                        foundItems.push(menuItems[i]);
                    }
                }
                
                return foundItems;

            })
            .catch(function (error) {
                console.log("Something went wrong getting data from the server.")
            });
        };
    }
})();