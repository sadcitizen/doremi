import negate from '.';

describe('func/negate()', () => {
    test('Returns a new function', () => {
        const fn = x => !!x;
        expect(negate(fn)).toEqual(expect.any(Function));
    });

    test('Negates the result of the predicate', () => {
        const isEven = x => x & 1;

        expect([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(negate(isEven))).toEqual([2, 4, 6, 8]);
    });
});
