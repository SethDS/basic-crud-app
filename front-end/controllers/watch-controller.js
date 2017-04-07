/**
 * Created by Seth on 4/7/2017.
 */
angular.module('myApp').controller('watchCtrl', function($scope, mainService, $stateParams){

    $scope.getOneWatch = function(id){
        mainService.getOneWatch(id).then(function(response){
            console.log(response);
        })
    }

});