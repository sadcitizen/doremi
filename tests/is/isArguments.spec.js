'use strict';

import chai from 'chai';
import isArguments from '../../src/is/isArguments';

const expect = chai.expect;

describe('is/isArguments()', () => {
    it('Should return true for if value is an arguments', () => {
        const fn = function () {
            return arguments;
        };

        expect(isArguments(arguments)).to.equal(true);
        expect(isArguments(fn())).to.equal(true);
    });

    it('Should return false for if value is not an arguments', () => {
        expect(isArguments(void 0)).to.equal(false);
        expect(isArguments(null)).to.equal(false);
        expect(isArguments(true)).to.equal(false);
        expect(isArguments(NaN)).to.equal(false);
        expect(isArguments(42)).to.equal(false);
        expect(isArguments('')).to.equal(false);
        expect(isArguments({})).to.equal(false);
        expect(isArguments([])).to.equal(false);
        expect(isArguments(new Date())).to.equal(false);
        expect(isArguments(/\s+/ig)).to.equal(false);
    });
});