angular.module('myApp').controller('mainCtrl', function($scope, mainService){

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
    }

});