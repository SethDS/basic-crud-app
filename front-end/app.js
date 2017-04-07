angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html',
            controller: 'mainCtrl'
        })
        .state('collection', {
            url: '/collection',
            templateUrl: './views/collection.html',
            controller: 'colCtrl'
        })
        .state('watch', {
            url: '/collection/:id',
            templateUrl: './views/watch.html',
            controller: 'watchCtrl'
        })
        .state('manage',{
            url: '/manage',
            templateUrl: './views/manage.html',
            controller: 'manageCtrl'
        })
});