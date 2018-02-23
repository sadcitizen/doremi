import isEven from '.';

describe('number/isEven()', () => {
    test('returns true if value is an even number', () => {
        expect(isEven(42)).toBe(true);
        expect(isEven(-42)).toBe(true);
        expect(isEven(0)).toBe(true);
    });

    test('returns false if value is an odd number', () => {
        expect(isEven(21)).toBe(false);
        expect(isEven(-21)).toBe(false);
    });

    test('returns false if value is not numeric', () => {
        expect(isEven(void 0)).toBe(false);
        expect(isEven(null)).toBe(false);
        expect(isEven(NaN)).toBe(false);
        expect(isEven(true)).toBe(false);
        expect(isEven('')).toBe(false);
        expect(isEven([])).toBe(false);
        expect(isEven({})).toBe(false);
        expect(isEven(new Date())).toBe(false);
        expect(isEven(/\s+/ig)).toBe(false);
    });
});
