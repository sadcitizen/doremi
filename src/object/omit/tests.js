import { VOID_0 } from '../../internal/constants';
import omit from '.';

describe('object/omit()', () => {
    let source;

    beforeAll(() => {
        source = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5 };
    });

    test('throws an error if value is not an object', () => {
        expect(() => omit(null, 'a', 'b')).toThrow('An object is expected');
        expect(() => omit(VOID_0, 'a', 'b')).toThrow('An object is expected');
    });

    test('returns new object without passed keys', () => {
        expect(omit(source, 'a', 'c', 'f')).toEqual({ b: 1, d: 3, e: 4 });
    });

    test('allows passing keys as array', () => {
        expect(omit(source, ['a', 'b', 'e'])).toEqual({ c: 2, d: 3, f: 5 });
    });

    test('allows passing keys as nested arrays', () => {
        expect(omit(source, ['a', 'b'], ['c', 'd'], 'f')).toEqual({ e: 4 });
    });
});
