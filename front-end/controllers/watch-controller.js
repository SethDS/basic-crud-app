/**
 * Created by Seth on 4/7/2017.
 */
angular.module('myApp').controller('watchCtrl', function($scope, mainService, $stateParams){

    $scope.theWatches = mainService.theWatches;

    function getOneWatch(id){
        for (var i = 0; i < $scope.theWatches.length; i++){
            if($scope.theWatches[i].watch_id === id){
                $scope.theWatch = $scope.theWatches[i];
                return;
            }
        }
    }
    getOneWatch($stateParams.id)
});