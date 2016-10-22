import { expect } from 'chai';
import append from '.';

describe('array/append()', function () {
    it('Append items of second array to the end of first array', function () {
        expect(append([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('Append an empty array', function () {
        expect(append([1, 2, 3], [])).to.deep.equal([1, 2, 3]);
        expect(append([], [4, 5, 6])).to.deep.equal([4, 5, 6]);
    });

    it('Return first array with appended items', function () {
        const target = [1, 2, 3];
        const source = [4, 5, 6];

        expect(append(target, source)).to.equal(target);
    });
});
