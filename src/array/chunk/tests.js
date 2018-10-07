import { INVALID_ARRAY_FIRST_ARGUMENT } from '../../constants/errors';
import VOID_0 from '../../constants/void-0';
import chunk from '.';

describe('array/chunk()', () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9]];

    test('returns array of chunks', () => {
        expect(chunk(array, 0)).toEqual(result);
        expect(chunk(array, 1)).toEqual(result);
        expect(chunk(array, 2)).toEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]);
        expect(chunk(array, 3)).toEqual([[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]);
        expect(chunk(array, 4)).toEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9]]);
        expect(chunk(array, 5)).toEqual([[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]);
        expect(chunk(array, 6)).toEqual([[0, 1, 2, 3, 4, 5], [6, 7, 8, 9]]);
        expect(chunk(array, 7)).toEqual([[0, 1, 2, 3, 4, 5, 6], [7, 8, 9]]);
        expect(chunk(array, 8)).toEqual([[0, 1, 2, 3, 4, 5, 6, 7], [8, 9]]);
        expect(chunk(array, 9)).toEqual([[0, 1, 2, 3, 4, 5, 6, 7, 8], [9]]);
        expect(chunk(array, 10)).toEqual([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]);
        expect(chunk(array, 11)).toEqual([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]);
        expect(chunk(array, 100)).toEqual([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]);
    });

    test('treats undefined size as 1', () => {
        expect(chunk(array)).toEqual(result);
        expect(chunk(array, VOID_0)).toEqual(result);
    });

    test('treats negative size as zero', () => {
        expect(chunk(array, -0)).toEqual(result);
        expect(chunk(array, -10)).toEqual(result);
        expect(chunk(array, -1000)).toEqual(result);
    });

    test('throws type error if the given value is not an array', () => {
        expect(() => chunk({}, 1)).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
    });
});
