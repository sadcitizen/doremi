import flatten from '.';

describe('array/flattenWithDepth()', () => {
    const array = [1, [2, [3, [4, [5, [6, [7]]]]]]];

    test('depth=1', () => {
        expect(flatten(array)).toEqual([1, 2, [3, [4, [5, [6, [7]]]]]]);
    });

    test('depth=2', () => {
        expect(flatten(array, 2)).toEqual([1, 2, 3, [4, [5, [6, [7]]]]]);
    });

    test('depth=3', () => {
        expect(flatten(array, 3)).toEqual([1, 2, 3, 4, [5, [6, [7]]]]);
    });

    test('depth=4', () => {
        expect(flatten(array, 4)).toEqual([1, 2, 3, 4, 5, [6, [7]]]);
    });

    test('depth=5', () => {
        expect(flatten(array, 5)).toEqual([1, 2, 3, 4, 5, 6, [7]]);
    });

    test('depth=6', () => {
        expect(flatten(array, 6)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});
