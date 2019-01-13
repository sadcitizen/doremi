import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_FUNCTION_SECOND_ARGUMENT } from '../../constants/errors';
import maxBy from '.';

describe('array/maxBy()', () => {
    test('returns the element with greatest value', () => {
        expect(maxBy([1, 2, 3, 4, 5])).toBe(5);
        expect(maxBy([1, -2, 3, 4, -5])).toBe(4);
    });

    test('returns NaN if the array is empty', () => {
        expect(maxBy([])).toEqual(NaN);
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

        expect(maxBy(guests, x => x.age)).toEqual({ name: 'Donald', age: 30 });
        expect(maxBy(guests, x => x.name.length)).toEqual({ name: 'Hillary', age: 22 });
    });

    test('throws type error if the given value is not an array', () => {
        expect(() => maxBy({})).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
        expect(() => maxBy('[]')).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
    });

    test('throws type error if the given iteratee is not a function', () => {
        expect(() => maxBy([], 'a')).toThrow(INVALID_FUNCTION_SECOND_ARGUMENT);
        expect(() => maxBy([], {})).toThrow(INVALID_FUNCTION_SECOND_ARGUMENT);
    });
});
