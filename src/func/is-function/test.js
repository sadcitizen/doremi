import { expect } from 'chai';
import isFunction from '.';

describe('func/isFunction()', () => {
    it('Return true if value is a function', () => {
        const noop = () => {};

        expect(isFunction(() => {})).to.equal(true);
        expect(isFunction(Math.abs)).to.equal(true);
        expect(isFunction(noop)).to.equal(true);
    });

    it('Return false if value is not a function', () => {
        expect(isFunction(arguments)).to.equal(false);
        expect(isFunction(true)).to.equal(false);
        expect(isFunction(void 0)).to.equal(false);
        expect(isFunction(null)).to.equal(false);
        expect(isFunction(NaN)).to.equal(false);
        expect(isFunction(42)).to.equal(false);
        expect(isFunction('')).to.equal(false);
        expect(isFunction([])).to.equal(false);
        expect(isFunction({})).to.equal(false);
        expect(isFunction(new Date())).to.equal(false);
        expect(isFunction(/\s+/ig)).to.equal(false);
    });
});
