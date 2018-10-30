import { INVALID_NUMBER_ARGUMENT, INVALID_STRING_ARGUMENT } from '../../constants/errors';
import VOID_0 from '../../constants/void-0';
import repeat from '.';

describe('string/repeat()', () => {
    test('repeats a string', () => {
        expect(repeat('*', 3)).toBe('***');
        expect(repeat('lorem', 2)).toBe('loremlorem');
        expect(repeat(' ', 5)).toBe('     ');
    });

    test('returns empty string if the second argument is zero', () => {
        expect(repeat(' ', 0)).toBe('');
        expect(repeat('lorem ipsum', 0)).toBe('');
    });

    test('returns empty string if the given string is empty', () => {
        expect(repeat('', 1)).toBe('');
        expect(repeat('', 10)).toBe('');
    });

    test('throws type error if the first argument is not a string', () => {
        expect(() => repeat(0, 1)).toThrow(INVALID_STRING_ARGUMENT);
        expect(() => repeat(VOID_0, 1)).toThrow(INVALID_STRING_ARGUMENT);
        expect(() => repeat(null, 1)).toThrow(INVALID_STRING_ARGUMENT);
    });

    test('throws type error if the second argument is not a number', () => {
        expect(() => repeat(' ', '1')).toThrow(INVALID_NUMBER_ARGUMENT);
        expect(() => repeat('null', null)).toThrow(INVALID_NUMBER_ARGUMENT);
    });

    test('treats negative second argument as zero', () => {
        expect(repeat('*', -1)).toBe('');
        expect(repeat('*', -100)).toBe('');
    });
});
