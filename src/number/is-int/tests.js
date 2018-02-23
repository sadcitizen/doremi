import isInt from '.';

describe('number/isInt()', () => {
    test('returns true if value is an integer', () => {
        expect(isInt(42)).toBe(true);
    });

    test('returns true if value is zero', () => {
        expect(isInt(0)).toBe(true);
        expect(isInt(-0)).toBe(true);
    });

    test('returns false if value is float number', () => {
        expect(isInt(42.42)).toBe(false);
    });

    test('returns false if value is infinity', () => {
        expect(isInt(Infinity)).toBe(false);
        expect(isInt(-Infinity)).toBe(false);
    });

    test('returns false if value is not numeric or is nan', () => {
        expect(isInt(null)).toBe(false);
        expect(isInt(NaN)).toBe(false);
        expect(isInt(true)).toBe(false);
        expect(isInt('')).toBe(false);
        expect(isInt([])).toBe(false);
        expect(isInt({})).toBe(false);
        expect(isInt(new Date())).toBe(false);
        expect(isInt(/\s+/ig)).toBe(false);
    });
});
