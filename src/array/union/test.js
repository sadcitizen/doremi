import { expect } from 'chai';
import union from '.';

describe('array/union()', () => {
    it('Concats the arrays', function () {
        const a = ['a', 'b', 'c'];
        const b = ['d', 'e', 'f'];

        expect(union(a, b)).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f']);
    });

    it('Removes duplicates', function () {
        const a = ['a', 'f', 'c'];
        const b = ['d', 'c', 'f'];

        expect(union(a, b)).to.deep.equal(['a', 'f', 'c', 'd']);
    });

    it('Uses empty array for undefined source', () => {
        expect(union(['a', 'b', 'c'])).to.deep.equal(['a', 'b', 'c']);
    });

    it('Allows custom iterator', () => {
        const target = [{ count: 1 }, { count: 2 }, { count: 3 }];
        const source = [{ count: 4 }, { count: 2 }];

        expect(union(target, source, x => x.count)).to.deep.equal([{ count: 1 }, { count: 2 }, { count: 3 }, { count: 4 }]);
    });
});
