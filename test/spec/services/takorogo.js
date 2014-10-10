'use strict';

describe('Service: takorogo', function () {

    // load the service's module
    beforeEach(module('takorogoApp'));

    // instantiate service
    var takorogo;
    beforeEach(inject(function (_takorogo_) {
        takorogo = _takorogo_;
    }));

    it('should expose parse function', function () {
        expect(typeof takorogo.parse).toBe('function');
    });

    it('should be able to parse', function () {
        expect(!!(takorogo.parse('def Tweet(id)').definitions.Tweet)).toBe(true);
    });

});
