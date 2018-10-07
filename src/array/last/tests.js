import { INVALID_ARRAY_FIRST_ARGUMENT } from '../../constants/errors';
import last from '.';

describe('array/last()', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];

    test('returns array with last element of the array', () => {
        expect(last(array)).toEqual([7]);
    });

    test('returns array with last N elements of the array', () => {
        expect(last(array, 1)).toEqual([7]);
        expect(last(array, 2)).toEqual([6, 7]);
        expect(last(array, 3)).toEqual([5, 6, 7]);
        expect(last(array, 4)).toEqual([4, 5, 6, 7]);
        expect(last(array, 5)).toEqual([3, 4, 5, 6, 7]);
        expect(last(array, 6)).toEqual([2, 3, 4, 5, 6, 7]);
        expect(last(array, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test('returns the array if number of elements greater than length of array', () => {
        expect(last(array, 8)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(last(array, 9)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(last(array, 10)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(last(array, 100)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(last(array, 100)).not.toBe(array);
    });

    test('returns empty array if count is negative', () => {
        expect(last(array, -1)).toEqual([]);
    });

    test('throws type error if the given value is not an array', () => {
        expect(() => last({}, 2)).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
        expect(() => last('', 2)).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
    });
});
