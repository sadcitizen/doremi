'use strict';

import chai from 'chai';
import isArray from '../../src/is/is-array';

const expect = chai.expect;

describe('is/isArray()', () => {
    it('Should return true if value is an array', () => {
        expect(isArray([])).to.equal(true);
        expect(isArray([1, 2, 3])).to.equal(true);
        expect(isArray(new Array(1, 2, 3))).to.equal(true);
    });

    it('Should return false if value is not an array', () => {
        expect(isArray(arguments)).to.equal(false);
        expect(isArray(void 0)).to.equal(false);
        expect(isArray(null)).to.equal(false);
        expect(isArray(true)).to.equal(false);
        expect(isArray(NaN)).to.equal(false);
        expect(isArray(42)).to.equal(false);
        expect(isArray('')).to.equal(false);
        expect(isArray({})).to.equal(false);
        expect(isArray(new Date())).to.equal(false);
        expect(isArray(/\s+/ig)).to.equal(false);
    });
});