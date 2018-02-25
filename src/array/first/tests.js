import first from '.';

describe('array/first()', () => {
    const target = [1, 2, 3, 4, 5, 6, 7];

    test('returns the first element of the array', () => {
        expect(first(target)).toBe(1);
    });

    test('returns the first N elements of the array', () => {
        expect(first(target, 3)).toEqual([1, 2, 3]);
        expect(first(target, 5)).toEqual([1, 2, 3, 4, 5]);
    });

    test('returns the array if number of elements greater than length of array', () => {
        expect(first(target, 100)).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(first(target, 100)).not.toBe(target);
    });
});
