import { INVALID_NUMBER_ARGUMENT } from '../../constants/errors';
import VOID_0 from '../../constants/void-0';
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

    test('returns false if value is float number', () => {
        expect(isEven(Math.E)).toBe(false);
        expect(isEven(Math.PI)).toBe(false);
        expect(isEven(Math.LN2)).toBe(false);
        expect(isEven(Math.LN10)).toBe(false);
    });

    test('returns false if value is infinity', () => {
        expect(isEven(Infinity)).toBe(false);
        expect(isEven(-Infinity)).toBe(false);
    });

    test('returns false if value is NaN', () => {
        expect(isEven(NaN)).toBe(false);
    });

    test('throws an error if value is not numeric', () => {
        expect(() => isEven(VOID_0)).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isEven(null)).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isEven(true)).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isEven('')).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isEven([])).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isEven({})).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isEven(new Date())).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isEven(/\s+/ig)).toThrow(INVALID_NUMBER_ARGUMENT);
    });
});
