/**
 * Created by Seth on 4/6/2017.
 */
angular.module('myApp').controller('colCtrl', function($scope, mainService){

    $scope.info = true;
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

    $scope.getOneWatch = function(id){
        console.log(id);
        console.log($scope.watches);
        for (var i = 0; i < $scope.watches.length; i++){
            console.log($scope.watches[i].watch_id);
            if($scope.watches[i].watch_id === id){
                $scope.theWatch = $scope.watches[i];
            }
        }
        console.log($scope.theWatch);
    };
});