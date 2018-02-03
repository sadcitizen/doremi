import padLeft from '.';

describe('string/padLeft()', () => {
    test('Adds characters to the left', () => {
        expect(padLeft('lorem', 4, '^')).toBe('lorem');
        expect(padLeft('lorem', 5, '^')).toBe('lorem');
        expect(padLeft('lorem', 6, '^')).toBe('^lorem');
        expect(padLeft('lorem', 7, '^')).toBe('^^lorem');
        expect(padLeft('lorem', 8, '^')).toBe('^^^lorem');
    });

    test('Takes only first character of padding string', () => {
        expect(padLeft('lorem', 6, '#')).toBe('#lorem');
        expect(padLeft('lorem', 6, '%#')).toBe('%lorem');
        expect(padLeft('lorem', 6, '&%#')).toBe('&lorem');
        expect(padLeft('lorem', 6, '$&%#')).toBe('$lorem');
    });

    test('Works with null and undefined', () => {
        expect(padLeft(void 0, 5, '*')).toBe('undefined');
        expect(padLeft(null, 5, '*')).toBe('*null');
    });
});
