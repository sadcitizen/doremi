import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_FUNCTION_SECOND_ARGUMENT } from '../../constants/errors';
import minBy from '.';

describe('array/minBy()', () => {
    test('returns the element with lowest value', () => {
        expect(minBy([1, 2, 3, 4, 5])).toBe(1);
        expect(minBy([1, -2, 3, 4, -5])).toBe(-5);
    });

    test('returns NaN if the array is empty', () => {
        expect(minBy([])).toEqual(NaN);
    });

    test('allows the custom iterator', () => {
        const guests = [
            {
                name: 'Bill',
                age: 21
            },
            {
                name: 'Hillary',
                age: 22
            },
            {
                name: 'Donald',
                age: 30
            },
            {
                name: 'Barak',
                age: 25
            }
        ];

        expect(minBy(guests, x => x.age)).toEqual({ name: 'Bill', age: 21 });
        expect(minBy(guests, x => x.name.length)).toEqual({ name: 'Bill', age: 21 });
    });

    test('throws type error if the given value is not an array', () => {
        expect(() => minBy({})).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
        expect(() => minBy('[]')).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
    });

    test('throws type error if the given iteratee is not a function', () => {
        expect(() => minBy([], 'a')).toThrow(INVALID_FUNCTION_SECOND_ARGUMENT);
        expect(() => minBy([], {})).toThrow(INVALID_FUNCTION_SECOND_ARGUMENT);
    });
});
