import {
    INVALID_ARRAY_FIRST_ARGUMENT,
    INVALID_FUNCTION_SECOND_ARGUMENT
} from '../../constants/errors';
import findLast from '.';

describe('array/findLast()', () => {
    const letters = [{ letter: 'a' }, { letter: 'b' }, { letter: 'c' }, { letter: 'd' }, { letter: 'c' }, { letter: 'd' }, { letter: 'b' }, { letter: 'a' }];

    test('returns index of last founded element', () => {
        expect(findLast(letters, l => l.letter === 'a')).toBe(letters[7]);
        expect(findLast(letters, l => l.letter === 'b')).toBe(letters[6]);
        expect(findLast(letters, l => l.letter === 'c')).toBe(letters[4]);
        expect(findLast(letters, l => l.letter === 'd')).toBe(letters[5]);
    });

    test('returns -1 if element is not found', () => {
        expect(findLast(letters, l => l === 'e')).toBe(null);
    });

    test('throws type error if the given value is not an array', () => {
        expect(() => findLast({}, x => x === 'a')).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
        expect(() => findLast('[]', x => x === 'a')).toThrow(INVALID_ARRAY_FIRST_ARGUMENT);
    });

    test('throws type error if the given predicate is not a function', () => {
        expect(() => findLast(letters, 'a')).toThrow(INVALID_FUNCTION_SECOND_ARGUMENT);
        expect(() => findLast(letters)).toThrow(INVALID_FUNCTION_SECOND_ARGUMENT);
    });
});
