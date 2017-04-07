/**
 * Created by Seth on 4/7/2017.
 */
angular.module('myApp').controller('watchCtrl', function($scope, mainService, $stateParams){

    $scope.watchId = $stateParams.id;

    console.log($stateParams);
});