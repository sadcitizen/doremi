import last from '.';

describe('array/last()', () => {
    const target = [1, 2, 3, 4, 5, 6, 7];

    test('returns the last element of the array', () => {
        expect(last(target)).toEqual([7]);
    });

    test('returns the last N elements of the array', () => {
        expect(last(target, 3)).toEqual([5, 6, 7]);
        expect(last(target, 5)).toEqual([3, 4, 5, 6, 7]);
    });

    test('returns the array if number of elements greater than length of array', () => {
        expect(last(target, 100)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(last(target, 100)).not.toBe(target);
    });
});
