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

    test('works with null and undefined', () => {
        expect(pad(void 0, 6, '@')).toBe('undefined');
        expect(pad(null, 6, '@')).toBe('@null@');
    });
});
