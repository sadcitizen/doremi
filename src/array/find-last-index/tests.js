import {
    INVALID_ARRAY_FIRST_ARGUMENT,
    INVALID_FUNCTION_SECOND_ARGUMENT
} from '../../constants/errors';
import findLastIndex from '.';

describe('array/findLastIndex()', () => {
    const letters = ['a', 'b', 'c', 'd', 'c', 'd', 'b', 'a'];

    test('returns index of last founded element', () => {
        expect(findLastIndex(letters, l => l === 'a')).toBe(7);
        expect(findLastIndex(letters, l => l === 'b')).toBe(6);
        expect(findLastIndex(letters, l => l === 'c')).toBe(4);
        expect(findLastIndex(letters, l => l === 'd')).toBe(5);
    });

    test('returns -1 if element is not found', () => {
        expect(findLastIndex(letters, l => l === 'e')).toBe(-1);
    });

    test('throws type error if the given value is not an array', () => {
        expect(() => findLastIndex({}, x => x === 'a')).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
        expect(() => findLastIndex('[]', x => x === 'a')).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
    });

    test('throws type error if the given predicate is not a function', () => {
        expect(() => findLastIndex(letters, 'a')).toThrow(INVALID_FUNCTION_SECOND_ARGUMENT);
        expect(() => findLastIndex(letters)).toThrow(INVALID_FUNCTION_SECOND_ARGUMENT);
    });
});
