'use strict';

import chai from 'chai';
import isNull from '../../src/is/is-null';

const expect = chai.expect;

describe('is/isUndefined()', function () {
    it('Should return true if value is null', function () {
        expect(isNull(null)).to.equal(true);
    });

    it('Should return false if value is not null', function () {
        expect(isNull(void 0)).to.equal(false);
        expect(isNull(undefined)).to.equal(false);
        expect(isNull(42)).to.equal(false);
        expect(isNull(NaN)).to.equal(false);
        expect(isNull(true)).to.equal(false);
        expect(isNull('')).to.equal(false);
        expect(isNull([])).to.equal(false);
        expect(isNull({})).to.equal(false);
        expect(isNull(new Date())).to.equal(false);
        expect(isNull(/\s+/ig)).to.equal(false);
    });
});