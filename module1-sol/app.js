(function(){
    'use strict';
    
    angular.module("LunchCheck",[])
    .controller("LunchCheckController",LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.items = "";
        $scope.outputMsg = "";
        $scope.textColor ="white";

        $scope.checkIfTooMuch= function(){
        if($scope.items == "" || $scope.items == " ")
        {
            $scope.outputMsg = "Please enter data first";
            $scope.textColor ="red";
        }   
        else{
            $scope.textColor ="green";
            var ItemNumber = numberOfItem($scope.items)
           if (ItemNumber < 4)
           {
                $scope.outputMsg = "Enjoy!";
           }
           else
           {
            $scope.outputMsg = "Too much!";
           }
        }
           
        };

        function numberOfItem(string){
            var numberOfItem = 0;
            var allItems = $scope.items.split(",");
            allItems.forEach(item => {
                if(item !='' && item != ' ')
                    numberOfItem ++;
            });
            return numberOfItem;
        }
    }
})();