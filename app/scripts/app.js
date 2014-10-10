'use strict';

/**
 * @ngdoc overview
 * @name takorogoApp
 * @description
 * # takorogoApp
 *
 * Main module of the application.
 */
angular
    .module('takorogoApp', [
        'ngAnimate',
        'ngCookies',
        'ngSanitize',
        'ngTouch',
        'ui.codemirror',
        'ui.router'
    ])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            });
    })
;
