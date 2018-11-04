import {
    INVALID_STRING_FIRST_ARGUMENT,
    INVALID_NUMBER_SECOND_ARGUMENT,
    INVALID_STRING_THIRD_ARGUMENT
} from '../../constants/errors';
import pad from '.';

describe('string/pad()', () => {
    test('adds characters to the right', () => {
        expect(pad('sit', 4, '^')).toBe('^sit');
        expect(pad('sit', 5, '^')).toBe('^sit^');
        expect(pad('sit', 6, '^')).toBe('^^sit^');
        expect(pad('sit', 7, '^')).toBe('^^sit^^');
        expect(pad('sit', 8, '^')).toBe('^^^sit^^');
    });

    test('takes only first character of padding string', () => {
        expect(pad('sit', 6, '#')).toBe('##sit#');
        expect(pad('sit', 7, '%#')).toBe('%%sit%%');
        expect(pad('sit', 8, '&%#')).toBe('&&&sit&&');
        expect(pad('sit', 9, '$&%#')).toBe('$$$sit$$$');
    });

    test('throws type error if the arguments are invalid', () => {
        expect(() => pad(123456, 6, '@')).toThrow(INVALID_STRING_FIRST_ARGUMENT);
        expect(() => pad('123456', '6', '@')).toThrow(INVALID_NUMBER_SECOND_ARGUMENT);
        expect(() => pad('123456', 6, 0)).toThrow(INVALID_STRING_THIRD_ARGUMENT);
    });
});
