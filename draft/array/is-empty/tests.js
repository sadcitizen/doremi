import { UNDEF, VOID_0 } from '../../internal/constants';
import isEmpty from '.';

describe('array/isEmpty()', () => {
    test('returns true if the array is undefined', () => {
        expect(isEmpty()).toBe(true);
        expect(isEmpty(UNDEF)).toBe(true);
        expect(isEmpty(VOID_0)).toBe(true);
    });

    test('returns true if the array is null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    test('returns true if the array is zero length', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('returns false if the array is not empty', () => {
        expect(isEmpty([0])).toBe(false);
        expect(isEmpty(['1'])).toBe(false);
        expect(isEmpty([[]])).toBe(false);
        expect(isEmpty([{}])).toBe(false);
        expect(isEmpty([null])).toBe(false);
    });
});
