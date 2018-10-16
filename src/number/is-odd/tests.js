import { INVALID_NUMBER_ARGUMENT } from '../../constants/errors';
import VOID_0 from '../../constants/void-0';
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
        expect(() => isOdd(VOID_0)).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isOdd(null)).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isOdd(true)).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isOdd('')).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isOdd([])).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isOdd({})).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isOdd(new Date())).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isOdd(/\s+/ig)).toThrow(INVALID_NUMBER_ARGUMENT);
    });
});
