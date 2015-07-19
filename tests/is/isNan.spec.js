'use strict';

import chai from 'chai';
import isNan from '../../src/is/isNan';

const expect = chai.expect;

describe('is/isNan()', () => {
    it('Should return true if value is NaN', () => {
        expect(isNan(NaN)).to.equal(true);
        expect(isNan(parseInt('hello'))).to.equal(true);
        expect(isNan(1 / 'hello')).to.equal(true);
    });

    it('Should return false if value is not NaN', () => {
        expect(isNan(arguments)).to.equal(false);
        expect(isNan(void 0)).to.equal(false);
        expect(isNan(true)).to.equal(false);
        expect(isNan(null)).to.equal(false);
        expect(isNan(new Date())).to.equal(false);
        expect(isNan(42)).to.equal(false);
        expect(isNan('')).to.equal(false);
        expect(isNan([])).to.equal(false);
        expect(isNan({})).to.equal(false);
        expect(isNan(/\s+/ig)).to.equal(false);
    });
});