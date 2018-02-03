import append from '.';

describe('array/append()', () => {
    test('Appends items of second array to the end of first array', () => {
        expect(append([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('Appends an empty array', () => {
        expect(append([1, 2, 3], [])).toEqual([1, 2, 3]);
        expect(append([], [4, 5, 6])).toEqual([4, 5, 6]);
    });

    test('Returns first array with appended items', () => {
        const target = [1, 2, 3];
        const source = [4, 5, 6];

        expect(append(target, source)).toBe(target);
    });
});
