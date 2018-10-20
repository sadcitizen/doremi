import gt from '.';

describe('logic/gt()', () => {
    test('returns true if value is greater than other value', () => {
        expect(gt(42, 1)).toBe(true);
    });

    test('returns false if value is less than other value', () => {
        expect(gt(1, 42)).toBe(false);
    });

    test('returns false if value is equal to other value', () => {
        expect(gt(42, 42)).toBe(false);
    });
});
