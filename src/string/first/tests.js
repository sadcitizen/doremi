import {
    INVALID_STRING_FIRST_ARGUMENT,
    INVALID_NUMBER_SECOND_ARGUMENT
} from '../../constants/errors';
import first from '.';

describe('string/first()', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    test('returns array with first letter of the string', () => {
        expect(first(alphabet)).toBe('a');
    });

    test('returns first N letters of the string', () => {
        expect(first(alphabet, 1)).toBe('a');
        expect(first(alphabet, 2)).toBe('ab');
        expect(first(alphabet, 3)).toBe('abc');
        expect(first(alphabet, 4)).toBe('abcd');
        expect(first(alphabet, 5)).toBe('abcde');
        expect(first(alphabet, 6)).toBe('abcdef');
        expect(first(alphabet, 7)).toBe('abcdefg');
        expect(first(alphabet, 100)).toBe(alphabet);
    });

    test('returns empty string if length is negative', () => {
        expect(first(alphabet, -1)).toBe('');
    });

    test('throws type error if the given value is not an array', () => {
        expect(() => first({}, 2)).toThrow(INVALID_STRING_FIRST_ARGUMENT);
        expect(() => first('', '2')).toThrow(INVALID_NUMBER_SECOND_ARGUMENT);
    });
});
