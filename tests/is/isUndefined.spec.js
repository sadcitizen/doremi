'use strict';

import chai from 'chai';
import isUndefined from '../../src/is/isUndefined';

const expect = chai.expect;

describe('is/isUndefined()', function () {
    it('Should return true if value is undefined', function () {
        expect(isUndefined()).to.equal(true);
        expect(isUndefined(void 0)).to.equal(true);
        expect(isUndefined(undefined)).to.equal(true);
    });

    it('Should return false if value is undefined', function () {
        expect(isUndefined(null)).to.equal(false);
        expect(isUndefined(42)).to.equal(false);
        expect(isUndefined(NaN)).to.equal(false);
        expect(isUndefined(true)).to.equal(false);
        expect(isUndefined('')).to.equal(false);
        expect(isUndefined([])).to.equal(false);
        expect(isUndefined({})).to.equal(false);
        expect(isUndefined(new Date())).to.equal(false);
        expect(isUndefined(/\s+/ig)).to.equal(false);
    });
});