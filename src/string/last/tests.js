import {
    INVALID_STRING_FIRST_ARGUMENT,
    INVALID_NUMBER_SECOND_ARGUMENT
} from '../../constants/errors';
import last from '.';

describe('string/last()', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    test('returns array with last letter of the string', () => {
        expect(last(alphabet)).toBe('z');
    });

    test('returns last N letters of the string', () => {
        expect(last(alphabet, 1)).toBe('z');
        expect(last(alphabet, 2)).toBe('yz');
        expect(last(alphabet, 3)).toBe('xyz');
        expect(last(alphabet, 4)).toBe('wxyz');
        expect(last(alphabet, 5)).toBe('vwxyz');
        expect(last(alphabet, 6)).toBe('uvwxyz');
        expect(last(alphabet, 7)).toBe('tuvwxyz');
        expect(last(alphabet, 100)).toBe(alphabet);
    });

    test('returns empty string if length is negative', () => {
        expect(last(alphabet, -1)).toBe('');
    });

    test('throws type error if the given value is not an array', () => {
        expect(() => last({}, 2)).toThrow(INVALID_STRING_FIRST_ARGUMENT);
        expect(() => last('', '2')).toThrow(INVALID_NUMBER_SECOND_ARGUMENT);
    });
});
