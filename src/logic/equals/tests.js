import equals from '.';

describe('logic/equals()', () => {
    test('returns true if value is equal to other value', () => {
        expect(equals(42, 42)).toBe(true);
        expect(equals('', '')).toBe(true);
        expect(equals(NaN, NaN)).toBe(true);
    });

    test('returns false if value is not equal to other value', () => {
        expect(equals(1, 42)).toBe(false);
        expect(equals({}, {})).toBe(false);
        expect(equals([], [])).toBe(false);
    });
});
