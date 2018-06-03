import negate from '.';

describe('func/negate()', () => {
    test('returns a new function', () => {
        const fn = x => !!x;

        expect(negate(fn)).toEqual(expect.any(Function));
    });

    test('negates the result of the predicate', () => {
        const isEven = x => x & 1; // eslint-disable-line no-bitwise

        expect([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(negate(isEven))).toEqual([2, 4, 6, 8]);
    });
});
