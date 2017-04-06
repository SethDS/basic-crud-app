angular.module('myApp').service('mainService', function($http){

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
            return response
        })
    }

    this.deleteWatch = function(id){
        console.log('Deleting watch number ' + id + '...');

        return $http({
            method: 'DELETE',
            url: '/api/deleteWatch',
            data: {
                watch_id: id
            }
        }).then(function(response){
            return response
        })
    }

});