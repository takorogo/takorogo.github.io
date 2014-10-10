'use strict';

/**
 * @ngdoc function
 * @name takorogoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the takorogoApp
 */
angular.module('takorogoApp')
    .controller('MainCtrl', function ($scope, takorogo, $templateCache) {
        $scope.cmTakorogoOptions = {
            lineWrapping: true,
            lineNumbers: true,
            mode: 'javascript',
            theme: 'mdn-like',
            onLoad: function (cmTakorogo) {
                cmTakorogo.on('change', function (sender) {
                    $scope.takorogoText = sender.getValue();
                });
            }
        };

        $scope.takorogoText = $templateCache.get('views/schemas/tweet.html') || '';

        $scope.cmJsonSchemaOptions = {
            lineWrapping: true,
            lineNumbers: true,
            theme: 'mdn-like',
            readOnly: 'nocursor',
            mode: 'application/json',
            parserConfig: { json: true }
        };

        $scope.jsonSchemaText = 'Please wait...';

        $scope.$watch('takorogoText', function (code) {
            $scope.jsonSchemaText = JSON.stringify(takorogo.parse(code), null, 4);
        });
    });
