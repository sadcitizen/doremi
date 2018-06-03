import equals from '.';

describe('array/equals()', () => {
    test('checks if the arrays contain the same elements', () => {
        const a = [1, 2, 3, 4];
        const b = [1, 2, 3, 4];
        const c = [5, 6, 7, 8];

        expect(equals(a, b)).toBe(true);
        expect(equals(a, c)).toBe(false);
    });

    test('returns true if the arrays are empty', () => {
        expect(equals([], [])).toBe(true);
    });

    test('allows custom compare function', () => {
        const a = [{ name: 'Donald' }, { name: 'Hillary' }, { name: 'Vladimir' }];
        const b = [{ name: 'Donald' }, { name: 'Hillary' }, { name: 'Vladimir' }];
        const c = [{ name: 'Donald' }, { name: 'Bill' }, { name: 'Vladimir' }];
        const comparer = (left, right) => left.name === right.name;

        expect(equals(a, b)).toBe(false);
        expect(equals(a, b, comparer)).toBe(true);

        expect(equals(a, c)).toBe(false);
        expect(equals(a, c, comparer)).toBe(false);
    });
});
