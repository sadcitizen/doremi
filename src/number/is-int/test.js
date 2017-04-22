import { expect } from 'chai';
import isInt from '.';

describe('number/isInt()', () => {
    it('Return true if value is an integer', () => {
        expect(isInt(42)).to.equal(true);
    });

    it('Return true if value is zero', () => {
        expect(isInt(0)).to.equal(true);
        expect(isInt(-0)).to.equal(true);
    });

    it('Return false if value is float number', () => {
        expect(isInt(42.42)).to.equal(false);
    });

    it('Return false if value is infinity', () => {
        expect(isInt(Infinity)).to.equal(false);
        expect(isInt(-Infinity)).to.equal(false);
    });

    it('Return false if value is not numeric or is nan', () => {
        expect(isInt(null)).to.equal(false);
        expect(isInt(NaN)).to.equal(false);
        expect(isInt(true)).to.equal(false);
        expect(isInt('')).to.equal(false);
        expect(isInt([])).to.equal(false);
        expect(isInt({})).to.equal(false);
        expect(isInt(new Date())).to.equal(false);
        expect(isInt(/\s+/ig)).to.equal(false);
    });
});
