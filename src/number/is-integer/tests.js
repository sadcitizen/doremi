import { INVALID_NUMBER_ARGUMENT } from '../../constants/errors';
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

    test('returns false if value is NaN', () => {
        expect(isInteger(NaN)).toBe(false);
    });

    test('throws an error if value is not numeric', () => {
        expect(() => isInteger(null)).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isInteger(true)).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isInteger('')).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isInteger([])).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isInteger({})).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isInteger(new Date())).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => isInteger(/\s+/ig)).toThrow(INVALID_NUMBER_ARGUMENT);
    });
});
