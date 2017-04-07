/**
 * Created by Seth on 4/7/2017.
 */
angular.module('myApp').controller('watchCtrl', function($scope, mainService, $stateParams){

    console.log($stateParams.id);

    $scope.getOneWatch = function(id){
        mainService.getOneWatch(id).then(function(response){
            console.log(response);
            $scope.theWatch  = response.data[0];
        })
    };

    $scope.getOneWatch($stateParams.id);

});