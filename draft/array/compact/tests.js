import { UNDEF } from '../../internal/constants';
import compact from '.';

describe('array/compact()', () => {
    test('returns the array without null or undefined values', () => {
        expect(compact([0, 1, false, 2, null, 3, UNDEF, '', 'null'])).toEqual([0, 1, false, 2, 3, '', 'null']);
        expect(compact([null, UNDEF])).toEqual([]);
    });

    test('returns the empty array if source is empty array', () => {
        expect(compact([])).toEqual([]);
    });
});