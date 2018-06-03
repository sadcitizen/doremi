import { UNDEF } from '../../internal/constants';
import at from '.';

describe('array/at()', () => {
    test('returns an array of elements corresponding to the given indexes', () => {
        const array = [1, 2, 3, 4, 5];

        expect(at(array)).toEqual([]);
        expect(at(array, 0)).toEqual([1]);
        expect(at(array, -1)).toEqual([5]);
        expect(at(array, 0, -1, 1)).toEqual([1, 5, 2]);
        expect(at(array, [0, -1, 1])).toEqual([1, 5, 2]);
        expect(at(array, [0, -6, 6])).toEqual([1, UNDEF, UNDEF]);
        expect(at(array, [])).toEqual([]);
    });
});
