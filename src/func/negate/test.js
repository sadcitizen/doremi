import { expect } from 'chai';
import negate from '.';

describe('func/negate()', () => {
    it('Returns a new function', () => {
        const fn = x => !!x;
        expect(negate(fn)).to.be.a('function');
    });

    it('Negates the result of the predicate', () => {
        const isEven = x => x & 1;

        expect([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(negate(isEven))).to.deep.equal([2, 4, 6, 8]);
    });
});
