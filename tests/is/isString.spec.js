'use strict';

import chai from 'chai';
import isString from '../../src/is/is-string';

const expect = chai.expect;

describe('is/isString()', () => {
    it('Should return false if value is a string', () => {
        expect(isString('')).to.equal(true);
        expect(isString(String(42))).to.equal(true);
        /* jshint -W053 */
        expect(isString(new String(42))).to.equal(true);
        /* jshint +W053 */
    });

    it('Should return false if value is not string', () => {
        expect(isString(void 0)).to.equal(false);
        expect(isString(null)).to.equal(false);
        expect(isString(NaN)).to.equal(false);
        expect(isString(true)).to.equal(false);
        expect(isString(42)).to.equal(false);
        expect(isString([])).to.equal(false);
        expect(isString({})).to.equal(false);
        expect(isString(new Date())).to.equal(false);
        expect(isString(/\s+/ig)).to.equal(false);
    });
});