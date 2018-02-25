import update from '.';

describe('array/update()', () => {
    test('Update the element at given index', () => {
        const target = [1, 2, 3, 4, 5];

        expect(update(target, 1, () => 3)).toEqual([1, 3, 3, 4, 5]);
        expect(update(target, 4, x => x * x)).toEqual([1, 2, 3, 4, 25]);
    });

    test('returns the shallow copy of the array if index greater than length of array', () => {
        const target = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];

        expect(update(target, 6, () => ({ f: 6 }))).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }]);
    });
});
