angular.module('myApp').controller('mainCtrl', function($scope, mainService){


    $scope.showWatchInfo = function(id){
        for(var i = 0; i < $scope.watches.length; i++){
            if($scope.watches[i].watch_id === id){
                $scope.watches[i].hideInfo = !$scope.watches[i].hideInfo;
            }
        }
    }
});