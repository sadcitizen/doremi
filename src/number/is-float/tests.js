import isFloat from '.';

describe('number/isFloat()', () => {
    test('returns true if value is float number', () => {
        expect(isFloat(42.42)).toBe(true);
    });

    test('returns false for other numbers', () => {
        expect(isFloat(42)).toBe(false);
        expect(isFloat(0)).toBe(false);
    });

    test('throws an error if value is not numeric or is nan', () => {
        expect(() => isFloat(null)).toThrow('A number is expected');
        expect(() => isFloat(NaN)).toThrow('A number is expected');
        expect(() => isFloat(true)).toThrow('A number is expected');
        expect(() => isFloat('')).toThrow('A number is expected');
        expect(() => isFloat([])).toThrow('A number is expected');
        expect(() => isFloat({})).toThrow('A number is expected');
        expect(() => isFloat(new Date())).toThrow('A number is expected');
        expect(() => isFloat(/\s+/ig)).toThrow('A number is expected');
    });
});
