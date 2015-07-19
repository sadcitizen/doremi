'use strict';

import chai from 'chai';
import isBoolean from '../../src/is/isBoolean';

const expect = chai.expect;

describe('is/isBoolean()', function () {
    it('Should return true if value is a boolean', function () {
        expect(isBoolean(true)).to.equal(true);
        expect(isBoolean(Boolean(42))).to.equal(true);
        /* jshint -W053 */
        expect(isBoolean(new Boolean(42))).to.equal(true);
        /* jshint +W053 */
    });

    it('Should return false if value is not a boolean', function () {
        expect(isBoolean(arguments)).to.equal(false);
        expect(isBoolean(void 0)).to.equal(false);
        expect(isBoolean(null)).to.equal(false);
        expect(isBoolean(NaN)).to.equal(false);
        expect(isBoolean(42)).to.equal(false);
        expect(isBoolean('')).to.equal(false);
        expect(isBoolean([])).to.equal(false);
        expect(isBoolean({})).to.equal(false);
        expect(isBoolean(new Date())).to.equal(false);
        expect(isBoolean(/\s+/ig)).to.equal(false);
    });
});