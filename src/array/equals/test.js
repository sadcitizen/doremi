import { expect } from 'chai';
import equals from '.';

describe('array/equals()', () => {
    it('Checks if the arrays contain the same elements', () => {
        const a = [1, 2, 3, 4];
        const b = [1, 2, 3, 4];
        const c = [5, 6, 7, 8];

        expect(equals(a, b)).to.be.true;
        expect(equals(a, c)).to.be.false;
    });

    it('Returns true if the arrays are empty', () => {
        expect(equals([], [])).to.be.true;
    });

    it('Allows custom compare function', () => {
        const a = [{ name: 'Donald' }, { name: 'Hillary' }, { name: 'Vladimir' }];
        const b = [{ name: 'Donald' }, { name: 'Hillary' }, { name: 'Vladimir' }];
        const c = [{ name: 'Donald' }, { name: 'Bill' }, { name: 'Vladimir' }];
        const comparer = (left, right) => left.name === right.name;

        expect(equals(a, b)).to.be.false;
        expect(equals(a, b, comparer)).to.be.true;

        expect(equals(a, c)).to.be.false;
        expect(equals(a, c, comparer)).to.be.false;
    });
});
