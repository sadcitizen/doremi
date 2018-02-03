import at from '.';

describe('array/at()', function () {
    test('Returns an array of elements corresponding to the given indexes', () => {
        const array = [1, 2, 3, 4, 5];

        expect(at(array)).toBe(undefined);
        expect(at(array, 0)).toBe(1);
        expect(at(array, -1)).toBe(5);
        expect(at(array, 0, -1, 1)).toEqual([1, 5, 2]);
        expect(at(array, [0, -1, 1])).toEqual([1, 5, 2]);
        expect(at(array, [0, -6, 6])).toEqual([1, undefined, undefined]);
        expect(at(array, [])).toEqual([]);
    });
});
