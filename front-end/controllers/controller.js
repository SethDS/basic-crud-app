angular.module('myApp').controller('mainCtrl', function($scope, mainService){

    $scope.info = true;

    $scope.addWatch = function(obj){
        console.log('yo');
        mainService.addWatch(obj).then(function(response){
            console.log(response);
        })
    };

    $scope.watches = [];

    $scope.getWatches = function(){
        console.log('Getting watches...');
        mainService.getWatches().then(function(response){
            $scope.watches = response.data;
            for(var i = 0; i < $scope.watches.length; i++){
                $scope.watches[i].hideInfo = true;
            }
            console.log(response);
        })
    };

    $scope.deleteWatch = function (id) {
        mainService.deleteWatch(id).then(function (response) {
            if(response.status === 200){
                alert('The watch has been deleted.')
            }

            $scope.getWatches();
        })
    };

    $scope.showWatchInfo = function(id){
        for(var i = 0; i < $scope.watches.length; i++){
            if($scope.watches[i].watch_id === id){
                $scope.watches[i].hideInfo = !$scope.watches[i].hideInfo;
            }
        }
    };

    $scope.changeWatchInfo = function (id, info) {
        mainService.changeWatchInfo(id, info).then(function(response){
            console.log(response)
        })
    }

});