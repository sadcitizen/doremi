import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_FUNCTION_SECOND_ARGUMENT } from '../../constants/errors';
import groupBy from '.';

describe('array/groupBy()', () => {
    test('returns grouped elements of the array by value', () => {
        const value = [1, 2, 3, 3, 2, 4];

        expect(groupBy(value)).toEqual({ 1: [1], 2: [2, 2], 3: [3, 3], 4: [4] });
    });

    test('returns empty object for empty array', () => {
        expect(groupBy([])).toEqual({});
    });

    test('allows custom iterator', () => {
        const cities = [{ name: 'Moscow' }, { name: 'London' }, { name: 'Tokyo' }, { name: 'Paris' }, { name: 'Berlin' }];

        expect(groupBy(cities, city => city.name.length)).toEqual({
            5: [{ name: 'Tokyo' }, { name: 'Paris' }],
            6: [{ name: 'Moscow' }, { name: 'London' }, { name: 'Berlin' }]
        });
    });

    test('throws type error if the given value is not an array', () => {
        expect(() => groupBy({})).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
        expect(() => groupBy('[]')).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
    });

    test('throws type error if the given iteratee is not a function', () => {
        expect(() => groupBy([], 'x => x')).toThrow(INVALID_FUNCTION_SECOND_ARGUMENT);
        expect(() => groupBy([], {})).toThrow(INVALID_FUNCTION_SECOND_ARGUMENT);
    });
});
