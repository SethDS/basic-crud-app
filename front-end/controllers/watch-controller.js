/**
 * Created by Seth on 4/7/2017.
 */
angular.module('myApp').controller('watchCtrl', function($scope, mainService, $stateParams){

    $scope.theWatch = [];

    function getOneWatch(id){
        mainService.getOneWatch(id).then(function(response){
            $scope.theWatch = response;
        })
    }
    getOneWatch($stateParams.id)
    console.log($scope.theWatch);
});