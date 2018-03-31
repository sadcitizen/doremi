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

    test('throws an error if value is not numeric or is nan', () => {
        expect(() => isInt(null)).toThrow('A number is expected');
        expect(() => isInt(NaN)).toThrow('A number is expected');
        expect(() => isInt(true)).toThrow('A number is expected');
        expect(() => isInt('')).toThrow('A number is expected');
        expect(() => isInt([])).toThrow('A number is expected');
        expect(() => isInt({})).toThrow('A number is expected');
        expect(() => isInt(new Date())).toThrow('A number is expected');
        expect(() => isInt(/\s+/ig)).toThrow('A number is expected');
    });
});
