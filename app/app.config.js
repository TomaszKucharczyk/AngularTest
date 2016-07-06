'use strict';

angular.module('myApp').
    config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/view3', {
                    template: '<view3></view3>'
                }).
                when('/view1', {
                    template: '<view1></view1>'
                }).
                otherwise({redirectTo: '/view1'});
        }]);