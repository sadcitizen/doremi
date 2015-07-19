'use strict';

import chai from 'chai';
import isEven from '../../src/is/isEven';

const expect = chai.expect;

describe('is/isEven()', () => {
    it('Should return true if value is an even number', () => {
        expect(isEven(42)).to.equal(true);
        expect(isEven(-42)).to.equal(true);
        expect(isEven(0)).to.equal(true);
    });

    it('Should return false if value is an odd number', () => {
        expect(isEven(21)).to.equal(false);
        expect(isEven(-21)).to.equal(false);
    });

    it('Should return false if value is not numeric', () => {
        expect(isEven(void 0)).to.equal(false);
        expect(isEven(null)).to.equal(false);
        expect(isEven(NaN)).to.equal(false);
        expect(isEven(true)).to.equal(false);
        expect(isEven('')).to.equal(false);
        expect(isEven([])).to.equal(false);
        expect(isEven({})).to.equal(false);
        expect(isEven(new Date())).to.equal(false);
        expect(isEven(/\s+/ig)).to.equal(false);
    });
});