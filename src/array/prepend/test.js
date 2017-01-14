import { expect } from 'chai';
import prepend from '.';

describe('array/prepend()', function () {
    it('Adds items of the second array to the beginning of the first array', function () {
        expect(prepend([1, 2, 3], [4, 5, 6])).to.deep.equal([4, 5, 6, 1, 2, 3]);
    });

    it('Prepends an empty array', function () {
        expect(prepend([], [1, 2, 3])).to.deep.equal([1, 2, 3]);
        expect(prepend([4, 5, 6], [])).to.deep.equal([4, 5, 6]);
    });

    it('Returns the first array with prepended items', function () {
        const target = [1, 2, 3];
        const source = [4, 5, 6];

        expect(prepend(target, source)).to.equal(target);
    });
});
