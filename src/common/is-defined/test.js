import { expect } from 'chai';
import isDefined from '.';

describe('common/isDefined()', () => {
    it('Return false if value is undefined', () => {
        expect(isDefined()).to.equal(false);
        expect(isDefined(undefined)).to.equal(false);
    });

    it('Return false if value is null', () => {
        expect(isDefined(null)).to.equal(false);
    });

    it('Return true for other values', () => {
        expect(isDefined(0)).to.equal(true);
        expect(isDefined(42)).to.equal(true);
        expect(isDefined(-42)).to.equal(true);
        expect(isDefined(NaN)).to.equal(true);
        expect(isDefined(Infinity)).to.equal(true);
        expect(isDefined(-Infinity)).to.equal(true);
        expect(isDefined(true)).to.equal(true);
        expect(isDefined(false)).to.equal(true);
        expect(isDefined('')).to.equal(true);
        expect(isDefined('hello')).to.equal(true);
        expect(isDefined([])).to.equal(true);
        expect(isDefined([1, 2, 3])).to.equal(true);
        expect(isDefined({})).to.equal(true);
        expect(isDefined({a: 'b', c: 'd'})).to.equal(true);
    });
});
