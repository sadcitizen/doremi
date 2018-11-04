import {
    INVALID_STRING_FIRST_ARGUMENT,
    INVALID_NUMBER_SECOND_ARGUMENT,
    INVALID_STRING_THIRD_ARGUMENT
} from '../../constants/errors';
import padRight from '.';

describe('string/padRight()', () => {
    test('adds characters to the right', () => {
        expect(padRight('lorem', 4, '^')).toBe('lorem');
        expect(padRight('lorem', 5, '^')).toBe('lorem');
        expect(padRight('lorem', 6, '^')).toBe('lorem^');
        expect(padRight('lorem', 7, '^')).toBe('lorem^^');
        expect(padRight('lorem', 8, '^')).toBe('lorem^^^');
    });

    test('takes only first character of padding string', () => {
        expect(padRight('lorem', 6, '#')).toBe('lorem#');
        expect(padRight('lorem', 6, '%#')).toBe('lorem%');
        expect(padRight('lorem', 6, '&%#')).toBe('lorem&');
        expect(padRight('lorem', 6, '$&%#')).toBe('lorem$');
    });

    test('throws type error if the arguments are invalid', () => {
        expect(() => padRight(123456, 6, '@')).toThrow(INVALID_STRING_FIRST_ARGUMENT);
        expect(() => padRight('123456', '6', '@')).toThrow(INVALID_NUMBER_SECOND_ARGUMENT);
        expect(() => padRight('123456', 6, 0)).toThrow(INVALID_STRING_THIRD_ARGUMENT);
    });
});
