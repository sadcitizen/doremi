import {
    INVALID_ARRAY_FIRST_ARGUMENT,
    INVALID_FUNCTION_SECOND_ARGUMENT
} from '../../constants/errors';
import findLastIndex from '.';

describe('array/findLastIndex()', () => {
    const letters = [{ letter: 'a' }, { letter: 'b' }, { letter: 'c' }, { letter: 'd' }, { letter: 'c' }, { letter: 'd' }, { letter: 'b' }, { letter: 'a' }];

    test('returns index of last founded element', () => {
        expect(findLastIndex(letters, l => l.letter === 'a')).toBe(7);
        expect(findLastIndex(letters, l => l.letter === 'b')).toBe(6);
        expect(findLastIndex(letters, l => l.letter === 'c')).toBe(4);
        expect(findLastIndex(letters, l => l.letter === 'd')).toBe(5);
    });

    test('returns -1 if element is not found', () => {
        expect(findLastIndex(letters, l => l.letter === 'e')).toBe(-1);
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
