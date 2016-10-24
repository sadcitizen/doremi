import { expect } from 'chai';
import isChar from '.';

describe('string/isChar()', () => {
    it('Return false if value is a char', () => {
        expect(isChar('a')).to.equal(true);
        expect(isChar(String(4))).to.equal(true);
        /* jshint -W053 */
        expect(isChar(new String(2))).to.equal(true);
        /* jshint +W053 */
    });

    it('Return false if value is not char', () => {
        expect(isChar(void 0)).to.equal(false);
        expect(isChar(null)).to.equal(false);
        expect(isChar(NaN)).to.equal(false);
        expect(isChar(true)).to.equal(false);
        expect(isChar(42)).to.equal(false);
        expect(isChar('')).to.equal(false);
        expect(isChar('hello')).to.equal(false);
        expect(isChar([])).to.equal(false);
        expect(isChar({})).to.equal(false);
        expect(isChar(new Date())).to.equal(false);
        expect(isChar(/\s+/ig)).to.equal(false);
    });
});
