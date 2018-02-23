import isOdd from '.';

describe('number/isOdd()', () => {
    test('returns false if value is an even number', () => {
        expect(isOdd(42)).toBe(false);
        expect(isOdd(-42)).toBe(false);
        expect(isOdd(0)).toBe(false);
    });

    test('returns true if value is odd number', () => {
        expect(isOdd(21)).toBe(true);
        expect(isOdd(-21)).toBe(true);
    });

    test('returns false if value is not numeric', () => {
        expect(isOdd(void 0)).toBe(false);
        expect(isOdd(null)).toBe(false);
        expect(isOdd(NaN)).toBe(false);
        expect(isOdd(true)).toBe(false);
        expect(isOdd('')).toBe(false);
        expect(isOdd([])).toBe(false);
        expect(isOdd({})).toBe(false);
        expect(isOdd(new Date())).toBe(false);
        expect(isOdd(/\s+/ig)).toBe(false);
    });
});
