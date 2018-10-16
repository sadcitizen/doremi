import { INVALID_NUMBER_ARGUMENT } from '../../constants/errors';
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
        expect(() => isFloat(null)).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isFloat(true)).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isFloat('')).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isFloat([])).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isFloat({})).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isFloat(new Date())).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isFloat(/\s+/ig)).toThrow(INVALID_NUMBER_ARGUMENT);
    });
});
