import { expect } from 'chai';
import update from '.';

describe('array/update()', () => {
    it('Update the element at given index', () => {
        const target = [1, 2, 3, 4, 5];

        expect(update(target, 1, () => 3)).to.deep.equal([1, 3, 3, 4, 5]);
        expect(update(target, 4, x => x * x)).to.deep.equal([1, 2, 3, 4, 25]);
    });

    it('Returns the shallow copy of the array if index greater than length of array', () => {
        const target = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];

        expect(update(target, 6, () => ({ f: 6 }))).to.deep.equal([{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }]);
    });
});
