angular.module('myApp').service('mainService', function($http){

    var theWatches = [];

    this.addWatch = function(obj){
        console.log('yo');
        return $http({
            method: 'POST',
            url: '/api/addWatch',
            data: {
                watchMake: obj.make,
                watchModel: obj.model,
                watchDescription: obj.description,
                watchImage: obj.imageLink
            }
        }).then(function(response){
            return response
        })
    };

    this.getWatches = function () {
        console.log('Service getting watches...');
        return $http({
            method: 'GET',
            url: '/api/getWatches'
        }).then(function(response){
            theWatches = response.data;
            return response
        })
    };
    this.getWatch = function(id){
        for(var i = 0; i < theWatches.length; i++){
            if(theWatches[i].watch_id === id){
                return theWatches[i];
            }
        }
    };

    this.deleteWatch = function(watchId){
        console.log('Deleting watch number ' + watchId + '...');

        return $http({
            method: 'DELETE',
            url: '/api/deleteWatch',
            headers : {
                watch_id: watchId
            }
        }).then(function(response){
            return response
        })
    };

    this.changeWatchInfo = function(id, info){
        console.log('Changing watch info...');

        return $http({
            method: 'PUT',
            url: '/api/changeWatchInfo',
            data: {
                id: id,
                info: info
            }
        }).then(function(response){
            return response
        })
    };

});