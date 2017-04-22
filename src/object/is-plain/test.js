import { expect } from 'chai';
import isPlain from '.';

describe('object/isPlain()', () => {
    it('Return true if value is a plain object', () => {
        expect(isPlain({})).to.equal(true);
        expect(isPlain({ lorem: 'ipsum' })).to.equal(true);
        /* jshint -W053, -W010 */
        expect(isPlain(new Object())).to.equal(true);
        /* jshint +W053, +W010 */
    });

    it('Return false if value is an object created with constructor function', () => {
        function Noop() {}
        Noop.prototype.useless = function () {};
        const noop = new Noop();

        expect(isPlain(noop)).to.equal(false);
    });

    it('Return false if value is not an object', () => {
        expect(isPlain(void 0)).to.equal(false);
        expect(isPlain(null)).to.equal(false);
        expect(isPlain(NaN)).to.equal(false);
        expect(isPlain(true)).to.equal(false);
        expect(isPlain(0)).to.equal(false);
        expect(isPlain('')).to.equal(false);
        expect(isPlain([])).to.equal(false);
        expect(isPlain(new Date())).to.equal(false);
        expect(isPlain(/\s+/ig)).to.equal(false);
    });
});
