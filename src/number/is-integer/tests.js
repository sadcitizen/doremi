import isInteger from '.';

describe('number/isInteger()', () => {
    test('returns true if value is an integer', () => {
        expect(isInteger(42)).toBe(true);
    });

    test('returns true if value is zero', () => {
        expect(isInteger(0)).toBe(true);
        expect(isInteger(-0)).toBe(true);
    });

    test('returns false if value is float number', () => {
        expect(isInteger(42.42)).toBe(false);
    });

    test('returns false if value is infinity', () => {
        expect(isInteger(Infinity)).toBe(false);
        expect(isInteger(-Infinity)).toBe(false);
    });

    test('throws an error if value is not numeric or is nan', () => {
        expect(() => isInteger(null)).toThrow('A number is expected');
        expect(() => isInteger(NaN)).toThrow('A number is expected');
        expect(() => isInteger(true)).toThrow('A number is expected');
        expect(() => isInteger('')).toThrow('A number is expected');
        expect(() => isInteger([])).toThrow('A number is expected');
        expect(() => isInteger({})).toThrow('A number is expected');
        expect(() => isInteger(new Date())).toThrow('A number is expected');
        expect(() => isInteger(/\s+/ig)).toThrow('A number is expected');
    });
});
