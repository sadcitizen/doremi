'use strict';

import chai from 'chai';
import isRegexp from '../../src/is/is-regexp';

const expect = chai.expect;

describe('is/isRegexp()', () => {
    it('Should return false if value is a string', () => {
        expect(isRegexp(/\s+/ig)).to.equal(true);
        expect(isRegexp(new RegExp('\\s', 'ig'))).to.equal(true);
    });

    it('Should return false if value is not numeric', () => {
        expect(isRegexp(void 0)).to.equal(false);
        expect(isRegexp(null)).to.equal(false);
        expect(isRegexp(NaN)).to.equal(false);
        expect(isRegexp(true)).to.equal(false);
        expect(isRegexp('')).to.equal(false);
        expect(isRegexp(42)).to.equal(false);
        expect(isRegexp([])).to.equal(false);
        expect(isRegexp({})).to.equal(false);
        expect(isRegexp(new Date())).to.equal(false);
    });
});