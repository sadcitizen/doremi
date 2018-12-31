import { UNDEF, VOID_0 } from '../../constants';
import { INVALID_ARRAY_ARGUMENT } from '../../constants/errors';
import hasValue from '.';

describe('array/hasValue()', () => {
    test('returns false if the array is undefined', () => {
        expect(hasValue()).toBe(false);
        expect(hasValue(UNDEF)).toBe(false);
        expect(hasValue(VOID_0)).toBe(false);
    });

    test('returns false if the array is null', () => {
        expect(hasValue(null)).toBe(false);
    });

    test('returns false if the array is zero length', () => {
        expect(hasValue([])).toBe(false);
    });

    test('returns true if the array is not empty', () => {
        expect(hasValue([0])).toBe(true);
        expect(hasValue(['1'])).toBe(true);
        expect(hasValue([[]])).toBe(true);
        expect(hasValue([{}])).toBe(true);
        expect(hasValue([null])).toBe(true);
    });

    test('throws type error if the given value is not an array', () => {
        expect(() => hasValue({})).toThrow(INVALID_ARRAY_ARGUMENT);
        expect(() => hasValue('[]')).toThrow(INVALID_ARRAY_ARGUMENT);
    });
});
