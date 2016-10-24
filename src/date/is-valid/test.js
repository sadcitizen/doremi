import { expect } from 'chai';
import isValid from '.';

describe('date/isValid()', () => {
    it('Return true if value is a valid date', () => {
        expect(isValid(new Date())).to.equal(true);
        expect(isValid(new Date(2014, 11, 1))).to.equal(true);
        expect(isValid(new Date([2014, 11, 1]))).to.equal(true);
    });

    it('Return true if value is not a valid date', () => {
        expect(isValid(new Date('date'))).to.equal(false);
        expect(isValid(new Date(/\s+/))).to.equal(false);
    });
});
