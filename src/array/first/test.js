import { expect } from 'chai';
import first from '.';

describe('array/first()', () => {
    const target = [1, 2, 3, 4, 5, 6, 7];

    it('Returns the first element of the array', () => {
        expect(first(target)).to.equal(1);
    });

    it('Returns the first N elements of the array', () => {
        expect(first(target, 3)).to.deep.equal([1, 2, 3]);
        expect(first(target, 5)).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('Returns the array if number of elements greater than length of array', () => {
        expect(first(target, 100)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
        expect(first(target, 100)).to.not.equal(target);
    });
});
