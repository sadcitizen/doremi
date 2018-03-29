import isOdd from '.';

describe('number/isOdd()', () => {
    test('returns false if value is an even number', () => {
        expect(isOdd(42)).toBe(false);
        expect(isOdd(-42)).toBe(false);
        expect(isOdd(0)).toBe(false);
        expect(isOdd(1e1)).toBe(false);
    });

    test('returns true if value is odd number', () => {
        expect(isOdd(21)).toBe(true);
        expect(isOdd(-21)).toBe(true);
        expect(isOdd(1e0)).toBe(true);
    });

    test('throws an error if value is not integer', () => {
        expect(() => isOdd(3.14)).toThrow('An integer is expected');
    });

    test('throws an error if value is not numeric', () => {
        expect(() => isOdd(void 0)).toThrow('A number is expected');
        expect(() => isOdd(null)).toThrow('A number is expected');
        expect(() => isOdd(NaN)).toThrow('A number is expected');
        expect(() => isOdd(true)).toThrow('A number is expected');
        expect(() => isOdd('')).toThrow('A number is expected');
        expect(() => isOdd([])).toThrow('A number is expected');
        expect(() => isOdd({})).toThrow('A number is expected');
        expect(() => isOdd(new Date())).toThrow('A number is expected');
        expect(() => isOdd(/\s+/ig)).toThrow('A number is expected');
    });
});
