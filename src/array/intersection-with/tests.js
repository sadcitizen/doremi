import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_ARRAY_SECOND_ARGUMENT } from '../../constants/errors';
import intersectionWith from '.';

describe('array/intersectionWith()', () => {
    test('returns the common items of the arrays', () => {
        const a = ['a', 'b', 'c'];
        const b = ['d', 'b', 'a'];
        const c = ['f', 'g', 'c'];

        expect(intersectionWith(a, b)).toEqual(['a', 'b']);
        expect(intersectionWith(a, c)).toEqual(['c']);
        expect(intersectionWith(b, c)).toEqual([]);
    });

    test('works with empty arrays', () => {
        expect(intersectionWith(['a', 'b', 'c'], [])).toEqual([]);
        expect(intersectionWith([], ['a', 'b', 'c'])).toEqual([]);
    });

    test('allows comparator to specify equality', () => {
        const value = [{ name: 'Bill', age: 20 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }, { name: 'Donald', age: 27 }];
        const other = [{ name: 'George', age: 21 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 24 }, { name: 'John', age: 29 }];
        const intersectionByNames = [{ name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }];
        const intersectionByNamesAndAges = [{ name: 'Hillary', age: 30 }];

        expect(intersectionWith(value, other, (l, r) => l.name === r.name)).toEqual(intersectionByNames);
        expect(intersectionWith(value, other, (l, r) => l.name === r.name && l.age === r.age)).toEqual(intersectionByNamesAndAges);
    });

    test('throws type error if given values are not arrays', () => {
        expect(() => intersectionWith({}, [])).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
        expect(() => intersectionWith([], {})).toThrow(INVALID_ARRAY_SECOND_ARGUMENT);
    });
});
