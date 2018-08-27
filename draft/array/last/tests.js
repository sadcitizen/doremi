import last from '.';

describe('array/last()', () => {
    const target = [1, 2, 3, 4, 5, 6, 7];

    test('returns array with last element of the array', () => {
        expect(last(target)).toEqual([7]);
    });

    test('returns array with last N elements of the array', () => {
        expect(last(target, 1)).toEqual([7]);
        expect(last(target, 2)).toEqual([6, 7]);
        expect(last(target, 3)).toEqual([5, 6, 7]);
        expect(last(target, 4)).toEqual([4, 5, 6, 7]);
        expect(last(target, 5)).toEqual([3, 4, 5, 6, 7]);
        expect(last(target, 6)).toEqual([2, 3, 4, 5, 6, 7]);
        expect(last(target, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test('returns the array if number of elements greater than length of array', () => {
        expect(last(target, 8)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(last(target, 9)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(last(target, 10)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(last(target, 100)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(last(target, 100)).not.toBe(target);
    });

    test('returns empty array if count is negative', () => {
        expect(last(target, -1)).toEqual([]);
    });
});
