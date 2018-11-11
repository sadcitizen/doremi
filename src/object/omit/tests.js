import { INVALID_OBJECT_ARGUMENT } from '../../constants/errors';
import UNDEF from '../../constants/undefined';
import omit from '.';

describe('object/omit()', () => {
    test('returns new object without given properties', () => {
        const source = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5 };

        expect(omit(source, ['a', 'c', 'f', 'g'])).toEqual({ b: 1, d: 3, e: 4 });
        expect(omit(source, ['a', 'b', 'e'])).toEqual({ c: 2, d: 3, f: 5 });
        expect(omit(source, ['a', 'b', 'c', 'd', 'f'])).toEqual({ e: 4 });
    });

    test('throws an error if value is not an object', () => {
        expect(() => omit(null, ['a', 'b'])).toThrow(INVALID_OBJECT_ARGUMENT);
        expect(() => omit(UNDEF, ['a', 'b'])).toThrow(INVALID_OBJECT_ARGUMENT);
    });
});
