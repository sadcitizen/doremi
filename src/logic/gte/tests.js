import gte from '.';

describe('logic/gte()', () => {
    test('returns true if value is greater than other value', () => {
        expect(gte(42, 1)).toBe(true);
    });

    test('returns false if value is less than other value', () => {
        expect(gte(1, 42)).toBe(false);
    });

    test('returns true if value is equal to other value', () => {
        expect(gte(42, 42)).toBe(true);
    });
});
