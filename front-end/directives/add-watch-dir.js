/**
 * Created by Seth on 4/7/2017.
 */
angular.module('myApp').directive('addWatchDir', function(){

    return {
        templateUrl: '../templates/add-watch-dir.html',
        restrict : 'E',
        controller: function($scope, mainService){
            $scope.addWatch = function(obj){
                console.log('yo');
                mainService.addWatch(obj).then(function(response){
                    console.log(response);
                    if(response.status === 200){
                        alert('Watch added.')
                    }
                })
            };
        },
        link: function(scope, element, attr){
            element.button.on('click', function(event){
                element.innerHTML('You have added a watch.');
                element.css({
                    color: 'red'
                })
            })
        }
    }
});