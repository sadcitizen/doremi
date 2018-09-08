import prepend from '.';

describe('array/prepend()', () => {
    test('adds items of the second array to the beginning of the first array', () => {
        expect(prepend([1, 2, 3], [4, 5, 6])).toEqual([4, 5, 6, 1, 2, 3]);
    });

    test('prepends an empty array', () => {
        expect(prepend([], [1, 2, 3])).toEqual([1, 2, 3]);
        expect(prepend([4, 5, 6], [])).toEqual([4, 5, 6]);
    });

    test('returns the first array with prepended items', () => {
        const target = [1, 2, 3];
        const source = [4, 5, 6];

        expect(prepend(target, source)).toBe(target);
    });
});