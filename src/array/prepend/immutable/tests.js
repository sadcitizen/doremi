import prepend from '.';

describe('array/prepend/immutable()', () => {
    test('prepends items of second array to the end of first array', () => {
        expect(prepend([1, 2, 3], [4, 5, 6])).toEqual([4, 5, 6, 1, 2, 3]);
    });

    test('prepends an empty array', () => {
        expect(prepend([1, 2, 3], [])).toEqual([1, 2, 3]);
        expect(prepend([], [4, 5, 6])).toEqual([4, 5, 6]);
    });

    test('returns new array with prepended items', () => {
        const target = [1, 2, 3];
        const source = [4, 5, 6];
        const other = [7, 8, 9];
        const expected = [7, 8, 9, 4, 5, 6, 1, 2, 3];
        const received = prepend(target, source, other);

        expect(received).not.toBe(target);
        expect(received).toEqual(expected);
    });
});
