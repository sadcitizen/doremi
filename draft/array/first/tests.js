import first from '.';

describe('array/first()', () => {
    const target = [1, 2, 3, 4, 5, 6, 7];

    test('returns array with first element of the array', () => {
        expect(first(target)).toEqual([1]);
    });

    test('returns array with first N elements of the array', () => {
        expect(first(target, 1)).toEqual([1]);
        expect(first(target, 2)).toEqual([1, 2]);
        expect(first(target, 3)).toEqual([1, 2, 3]);
        expect(first(target, 4)).toEqual([1, 2, 3, 4]);
        expect(first(target, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(first(target, 6)).toEqual([1, 2, 3, 4, 5, 6]);
        expect(first(target, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test('returns the array if number of elements greater than length of array', () => {
        expect(first(target, 8)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(first(target, 9)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(first(target, 10)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(first(target, 100)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(first(target, 100)).not.toBe(target);
    });

    test('returns empty array if count is negative', () => {
        expect(first(target, -1)).toEqual([]);
    });
});
