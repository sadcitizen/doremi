import { expect } from 'chai';
import flatten from '.';

describe('array/flatten()', () => {
    const target = [1, [2], [3, [4, [5]], 6], 7];

    it('Returns recursively flatten array', () => {
        expect(flatten(target)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
    });

    it('Flattens only one layer of the array', () => {
        expect(flatten(target, false)).to.deep.equal([1, 2, 3, [4, [5]], 6, 7]);
    });

    it('Returns the empty array if the source array is not an array', () => {
        expect(flatten('[1, [2], [3, [4, [5]], 6], 7]')).to.deep.equal([]);
        expect(flatten()).to.deep.equal([]);
        expect(flatten(null)).to.deep.equal([]);
    });
});
