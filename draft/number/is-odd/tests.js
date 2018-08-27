import { VOID_0 } from '../../internal/constants';
import isOdd from '.';

describe('number/isOdd()', () => {
    test('returns true if value is odd number', () => {
        expect(isOdd(21)).toBe(true);
        expect(isOdd(-21)).toBe(true);
        expect(isOdd(1e0)).toBe(true);
    });

    test('returns false if value is an even number', () => {
        expect(isOdd(42)).toBe(false);
        expect(isOdd(-42)).toBe(false);
        expect(isOdd(0)).toBe(false);
        expect(isOdd(1e1)).toBe(false);
    });

    test('returns false if value is float number', () => {
        expect(isOdd(Math.E)).toBe(false);
        expect(isOdd(Math.PI)).toBe(false);
        expect(isOdd(Math.LN2)).toBe(false);
        expect(isOdd(Math.LN10)).toBe(false);
    });

    test('returns false if value is infinity', () => {
        expect(isOdd(Infinity)).toBe(false);
        expect(isOdd(-Infinity)).toBe(false);
    });

    test('returns false if value is NaN', () => {
        expect(isOdd(NaN)).toBe(false);
    });

    test('throws an error if value is not numeric', () => {
        expect(() => isOdd(VOID_0)).toThrow('A number is expected');
        expect(() => isOdd(null)).toThrow('A number is expected');
        expect(() => isOdd(true)).toThrow('A number is expected');
        expect(() => isOdd('')).toThrow('A number is expected');
        expect(() => isOdd([])).toThrow('A number is expected');
        expect(() => isOdd({})).toThrow('A number is expected');
        expect(() => isOdd(new Date())).toThrow('A number is expected');
        expect(() => isOdd(/\s+/ig)).toThrow('A number is expected');
    });
});
