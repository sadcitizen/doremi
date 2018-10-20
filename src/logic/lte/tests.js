import lte from '.';

describe('logic/lte()', () => {
    test('returns true if value is less than other value', () => {
        expect(lte(1, 42)).toBe(true);
    });

    test('returns false if value is greater than other value', () => {
        expect(lte(42, 1)).toBe(false);
    });

    test('returns true if value is equal to other value', () => {
        expect(lte(42, 42)).toBe(true);
    });
});
