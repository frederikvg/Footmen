'use strict';

var footmenApp = angular.module('footmenApp', ['mainCtrl', 'footmenService', 'ngAnimate', 'ngRoute']);

footmenApp.config(
    ['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'view/main.html'
            })
            .when('/main', {
                templateUrl: 'view/main.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]
);

footmenApp.directive('fbHeader', function () {
    return {
        templateUrl: 'view/header.html'
    };
});

footmenApp.directive('fbFooter', function () {
    return {
        templateUrl: 'view/footer.html'
    };
});