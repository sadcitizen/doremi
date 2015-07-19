'use strict';

import chai from 'chai';
import isNumber from '../../src/is/isNumber';

const expect = chai.expect;

describe('.number()', () => {
    it('Should return false if value is an number', () => {
        expect(isNumber(42)).to.equal(true);
        expect(isNumber(Number('42'))).to.equal(true);
        /* jshint -W053 */
        expect(isNumber(new Number('42'))).to.equal(true);
        /* jshint +W053 */
        expect(isNumber(-42)).to.equal(true);
        expect(isNumber(0)).to.equal(true);
    });

    it('Should return false if value is not numeric', () => {
        expect(isNumber(void 0)).to.equal(false);
        expect(isNumber(null)).to.equal(false);
        expect(isNumber(NaN)).to.equal(false);
        expect(isNumber(true)).to.equal(false);
        expect(isNumber('')).to.equal(false);
        expect(isNumber([])).to.equal(false);
        expect(isNumber({})).to.equal(false);
        expect(isNumber(new Date())).to.equal(false);
        expect(isNumber(/\s+/ig)).to.equal(false);
    });
});