import { INVALID_OBJECT_ARGUMENT } from '../../constants/errors';
import UNDEF from '../../constants/undefined';
import pick from '.';

describe('object/pick()', () => {
    test('returns new object with given properties', () => {
        const source = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5 };

        expect(pick(source, ['a', 'c', 'f'])).toEqual({ a: 0, c: 2, f: 5 });
        expect(pick(source, ['a', 'b', 'e'])).toEqual({ a: 0, b: 1, e: 4 });
        expect(pick(source, ['a', 'b', 'c', 'd', 'f'])).toEqual({ a: 0, b: 1, c: 2, d: 3, f: 5 });
    });

    test('throws an error if value is not an object', () => {
        expect(() => pick(null, ['a', 'b'])).toThrow(INVALID_OBJECT_ARGUMENT);
        expect(() => pick(UNDEF, ['a', 'b'])).toThrow(INVALID_OBJECT_ARGUMENT);
    });
});
