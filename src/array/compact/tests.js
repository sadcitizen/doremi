import compact from '.';

describe('array/compact()', () => {
    test('Returns the array without null or undefined values', () => {
        expect(compact([0, 1, false, 2, null, 3, undefined, '', 'null'])).toEqual([0, 1, false, 2, 3, '', 'null']);
        expect(compact([null, undefined])).toEqual([]);
    });

    test('Returns the empty array if source is empty array', () => {
        expect(compact([])).toEqual([]);
    });
});
