var to = require('../build/to.min');
var expect = require('chai').expect;

describe('To', function () {
    describe('.constant()', function () {
        it('Should return new function that returns a value', function () {
            var hi = to.constant('hi');
            expect(hi()).to.equal('hi');
            expect(hi('bye')).to.equal('hi');
            expect(hi.call({})).to.equal('hi');
        });

        it('Should work with objects', function () {
            var obj = { a: 'b', c: 'd' };
            var fn = to.constant(obj);

            expect(fn()).to.equal(obj);
        });
    });
});