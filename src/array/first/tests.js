import { INVALID_ARRAY_FIRST_ARGUMENT } from '../../constants/errors';
import first from '.';

describe('array/first()', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];

    test('returns array with first element of the array', () => {
        expect(first(array)).toEqual([1]);
    });

    test('returns array with first N elements of the array', () => {
        expect(first(array, 1)).toEqual([1]);
        expect(first(array, 2)).toEqual([1, 2]);
        expect(first(array, 3)).toEqual([1, 2, 3]);
        expect(first(array, 4)).toEqual([1, 2, 3, 4]);
        expect(first(array, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(first(array, 6)).toEqual([1, 2, 3, 4, 5, 6]);
        expect(first(array, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test('returns the array if number of elements greater than length of array', () => {
        expect(first(array, 8)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(first(array, 9)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(first(array, 10)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(first(array, 100)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(first(array, 100)).not.toBe(array);
    });

    test('returns empty array if count is negative', () => {
        expect(first(array, -1)).toEqual([]);
    });

    test('throws type error if the given value is not an array', () => {
        expect(() => first({}, 2)).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
        expect(() => first('', 2)).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
    });
});
