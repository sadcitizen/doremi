import { expect } from 'chai';
import last from '.';

describe('array/last()', () => {
    const target = [1, 2, 3, 4, 5, 6, 7];

    it('Returns the last element of the array', () => {
        expect(last(target)).to.equal(7);
    });

    it('Returns the last N elements of the array', () => {
        expect(last(target, 3)).to.deep.equal([5, 6, 7]);
        expect(last(target, 5)).to.deep.equal([3, 4, 5, 6, 7]);
    });

    it('Returns the array if number of elements greater than length of array', () => {
        expect(last(target, 100)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
        expect(last(target, 100)).to.not.equal(target);
    });
});
