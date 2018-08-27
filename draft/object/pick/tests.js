import { VOID_0 } from '../../internal/constants';
import pick from '.';

describe('object/pick()', () => {
    const source = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5 };

    test('throws an error if value is not an object', () => {
        expect(() => pick(null, 'a', 'b')).toThrow('An object is expected');
        expect(() => pick(VOID_0, 'a', 'b')).toThrow('An object is expected');
    });

    test('returns new object with passed keys', () => {
        expect(pick(source, 'a', 'c', 'f')).toEqual({ a: 0, c: 2, f: 5 });
    });

    test('allows passing keys as array', () => {
        expect(pick(source, ['a', 'b', 'e'])).toEqual({ a: 0, b: 1, e: 4 });
    });

    test('allows passing keys as nested arrays', () => {
        expect(pick(source, ['a', 'b'], ['c', 'd'], 'f')).toEqual({ a: 0, b: 1, c: 2, d: 3, f: 5 });
    });
});
