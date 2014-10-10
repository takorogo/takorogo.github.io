'use strict';

/**
 * @ngdoc service
 * @name takorogoApp.takorogo
 * @description
 * # takorogo
 * Factory in the takorogoApp.
 */
angular.module('takorogoApp')
    .factory('takorogo', function () {
        return require('takorogo');
    });
