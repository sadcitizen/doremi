'use strict';

import chai from 'chai';
import isOdd from '../../src/is/isOdd';

const expect = chai.expect;

describe('is/isOdd()', () => {
    it('Should return false if value is an even number', () => {
        expect(isOdd(42)).to.equal(false);
        expect(isOdd(-42)).to.equal(false);
        expect(isOdd(0)).to.equal(false);
    });

    it('Should return true if value is odd number', () => {
        expect(isOdd(21)).to.equal(true);
        expect(isOdd(-21)).to.equal(true);
    });

    it('Should return false if value is not numeric', () => {
        expect(isOdd(void 0)).to.equal(false);
        expect(isOdd(null)).to.equal(false);
        expect(isOdd(NaN)).to.equal(false);
        expect(isOdd(true)).to.equal(false);
        expect(isOdd('')).to.equal(false);
        expect(isOdd([])).to.equal(false);
        expect(isOdd({})).to.equal(false);
        expect(isOdd(new Date())).to.equal(false);
        expect(isOdd(/\s+/ig)).to.equal(false);
    });
});