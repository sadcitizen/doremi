import isFloat from '.';

describe('number/isFloat()', () => {
    test('Return true if value is float number', () => {
        expect(isFloat(42.42)).toBe(true);
    });

    test('Return false for other numbers', () => {
        expect(isFloat(42)).toBe(false);
        expect(isFloat(0)).toBe(false);
    });

    test('Return false if value is not numeric or is nan', () => {
        expect(isFloat(null)).toBe(false);
        expect(isFloat(NaN)).toBe(false);
        expect(isFloat(true)).toBe(false);
        expect(isFloat('')).toBe(false);
        expect(isFloat([])).toBe(false);
        expect(isFloat({})).toBe(false);
        expect(isFloat(new Date())).toBe(false);
        expect(isFloat(/\s+/ig)).toBe(false);
    });
});
