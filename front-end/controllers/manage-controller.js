/**
 * Created by Seth on 4/7/2017.
 */
angular.module('myApp').controller('manageCtrl', function($scope, mainService){

    $scope.addWatch = function(obj){
        console.log('yo');
        mainService.addWatch(obj).then(function(response){
            console.log(response);
            if(response.status === 200){
                alert('Watch added.')
            }
        })
    };
});