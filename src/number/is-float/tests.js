import isFloat from '.';

describe('number/isFloat()', () => {
    test('returns true if value is float number', () => {
        expect(isFloat(42.42)).toBe(true);
    });

    test('returns false for other numbers', () => {
        expect(isFloat(42)).toBe(false);
        expect(isFloat(0)).toBe(false);
        expect(isFloat(-0)).toBe(false);
    });

    test('returns false if value is infinity', () => {
        expect(isFloat(Infinity)).toBe(false);
        expect(isFloat(-Infinity)).toBe(false);
    });

    test('returns false if value is NaN', () => {
        expect(isFloat(NaN)).toBe(false);
    });

    test('throws an error if value is not numeric', () => {
        expect(() => isFloat(null)).toThrow('A number is expected');
        expect(() => isFloat(true)).toThrow('A number is expected');
        expect(() => isFloat('')).toThrow('A number is expected');
        expect(() => isFloat([])).toThrow('A number is expected');
        expect(() => isFloat({})).toThrow('A number is expected');
        expect(() => isFloat(new Date())).toThrow('A number is expected');
        expect(() => isFloat(/\s+/ig)).toThrow('A number is expected');
    });
});
