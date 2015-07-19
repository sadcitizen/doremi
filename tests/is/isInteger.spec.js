'use strict';

import chai from 'chai';
import isInteger from '../../src/is/isInteger';

const expect = chai.expect;

describe('is/isInteger()', () => {
    it('Should return true if value is an integer', () => {
        expect(isInteger(42)).to.equal(true);
    });

    it('Should return true if value is zero', () => {
        expect(isInteger(0)).to.equal(true);
    });

    it('Should return false if value is float number', () => {
        expect(isInteger(42.42)).to.equal(false);
    });

    it('Should return false if value is not numeric or is nan', () => {
        expect(isInteger(null)).to.equal(false);
        expect(isInteger(NaN)).to.equal(false);
        expect(isInteger(true)).to.equal(false);
        expect(isInteger('')).to.equal(false);
        expect(isInteger([])).to.equal(false);
        expect(isInteger({})).to.equal(false);
        expect(isInteger(new Date())).to.equal(false);
        expect(isInteger(/\s+/ig)).to.equal(false);
    });
});