import flatten from '.';

describe('array/flatten()', () => {
    const target = [1, [2], [3, [4, [5]], 6], 7];

    test('returns recursively flatten array', () => {
        expect(flatten(target)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test('Flattens only one layer of the array', () => {
        expect(flatten(target, false)).toEqual([1, 2, 3, [4, [5]], 6, 7]);
    });

    test('returns the empty array if the source array is not an array', () => {
        expect(flatten('[1, [2], [3, [4, [5]], 6], 7]')).toEqual([]);
        expect(flatten()).toEqual([]);
        expect(flatten(null)).toEqual([]);
    });
});
