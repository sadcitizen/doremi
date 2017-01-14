import { expect } from 'chai';
import append from '.';

describe('array/append()', () => {
    it('Appends items of second array to the end of first array', () => {
        expect(append([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('Appends an empty array', () => {
        expect(append([1, 2, 3], [])).to.deep.equal([1, 2, 3]);
        expect(append([], [4, 5, 6])).to.deep.equal([4, 5, 6]);
    });

    it('Returns first array with appended items', () => {
        const target = [1, 2, 3];
        const source = [4, 5, 6];

        expect(append(target, source)).to.equal(target);
    });
});
