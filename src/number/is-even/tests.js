import isEven from '.';

describe('number/isEven()', () => {
    test('returns true if value is an even number', () => {
        expect(isEven(42)).toBe(true);
        expect(isEven(-42)).toBe(true);
        expect(isEven(0)).toBe(true);
        expect(isEven(1e1)).toBe(true);
    });

    test('returns false if value is an odd number', () => {
        expect(isEven(21)).toBe(false);
        expect(isEven(-21)).toBe(false);
        expect(isEven(1e0)).toBe(false);
    });

    test('throws an error if value is not integer', () => {
        expect(() => isEven(3.14)).toThrow('An integer is expected');
    });

    test('throws an error if value is not numeric', () => {
        expect(() => isEven(void 0)).toThrow('A number is expected');
        expect(() => isEven(null)).toThrow('A number is expected');
        expect(() => isEven(NaN)).toThrow('A number is expected');
        expect(() => isEven(true)).toThrow('A number is expected');
        expect(() => isEven('')).toThrow('A number is expected');
        expect(() => isEven([])).toThrow('A number is expected');
        expect(() => isEven({})).toThrow('A number is expected');
        expect(() => isEven(new Date())).toThrow('A number is expected');
        expect(() => isEven(/\s+/ig)).toThrow('A number is expected');
    });
});
