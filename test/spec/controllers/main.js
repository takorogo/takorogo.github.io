'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('takorogoApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should expose Takorogo editor options to the scope', function () {
        expect(typeof scope.cmTakorogoOptions).toBe('object');
    });

    it('should expose model for Takorogo code to the scope', function () {
        expect(typeof scope.takorogoText).toBe('string');
    });

    it('should expose JSON Schema editor options to the scope', function () {
        expect(typeof scope.cmJsonSchemaOptions).toBe('object');
    });

    it('should expose model for JSON SChema code to the scope', function () {
        expect(typeof scope.jsonSchemaText).toBe('string');
    });
});
