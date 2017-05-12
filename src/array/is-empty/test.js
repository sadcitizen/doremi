import { expect } from 'chai';
import isEmpty from '.';

describe('array/isEmpty()', () => {
    it('Returns true if the array is undefined', () => {
        expect(isEmpty()).to.equal(true);
        expect(isEmpty(undefined)).to.equal(true);
        expect(isEmpty(void 0)).to.equal(true);
    });

    it('Returns true if the array is null', () => {
        expect(isEmpty(null)).to.equal(true);
    });

    it('Returns true if the array is zero length', () => {
        expect(isEmpty([])).to.equal(true);
    });

    it('Returns false if the array is not empty', () => {
        expect(isEmpty([0])).to.equal(false);
        expect(isEmpty(['1'])).to.equal(false);
        expect(isEmpty([[]])).to.equal(false);
        expect(isEmpty([{}])).to.equal(false);
        expect(isEmpty([null])).to.equal(false);
    });
});
