import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_FUNCTION_SECOND_ARGUMENT } from '../../constants/errors';
import sumBy from '.';

describe('array/sumBy()', () => {
    test('returns the sum of values', () => {
        expect(sumBy([1, 2, 3, 4, 5])).toBe(15);
        expect(sumBy([1, -2, 3, 4, -5])).toBe(1);
    });

    test('returns zero if the array is empty', () => {
        expect(sumBy([])).toEqual(0);
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

        expect(sumBy(guests, x => x.age)).toBe(98);
        expect(sumBy(guests, x => x.name.length)).toBe(22);
    });

    test('throws type error if the given value is not an array', () => {
        expect(() => sumBy({})).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
        expect(() => sumBy('[]')).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
    });

    test('throws type error if the given iteratee is not a function', () => {
        expect(() => sumBy([], 'a')).toThrow(INVALID_FUNCTION_SECOND_ARGUMENT);
        expect(() => sumBy([], {})).toThrow(INVALID_FUNCTION_SECOND_ARGUMENT);
    });
});
