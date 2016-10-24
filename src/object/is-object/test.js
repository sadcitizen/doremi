import { expect } from 'chai';
import isObject from '.';

describe('object/isObject()', () => {
    it('Return true if value is an object', () => {
        function Noop() {}
        const noop = new Noop();

        expect(isObject({})).to.equal(true);
        expect(isObject({ a: 'b', c: 'd' })).to.equal(true);
        /* jshint -W057 */
        expect(isObject(noop)).to.equal(true);
        /* jshint +W057 */
        /* jshint -W053, -W010 */
        expect(isObject(new Object())).to.equal(true);
        /* jshint +W053, +W010 */
    });

    it('Return false if value is not an object', () => {
        expect(isObject(void 0)).to.equal(false);
        expect(isObject(null)).to.equal(false);
        expect(isObject(NaN)).to.equal(false);
        expect(isObject(true)).to.equal(false);
        expect(isObject(0)).to.equal(false);
        expect(isObject('')).to.equal(false);
        expect(isObject([])).to.equal(false);
        expect(isObject(new Date())).to.equal(false);
        expect(isObject(/\s+/ig)).to.equal(false);
    });
});
