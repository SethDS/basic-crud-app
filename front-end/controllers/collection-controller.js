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

    $scope.options = ['Select', 'Seiko', 'Oris', 'Breitling', 'Rolex', 'Omega'];
});