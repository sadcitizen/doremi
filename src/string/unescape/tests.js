import unescape from '.';

describe('string/unescape()', () => {
    test('Should escape a string', () => {
        expect(unescape('&lt;p&gt;hi!&lt;/p&gt;')).toBe('<p>hi!</p>');
        expect(unescape('&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;')).toBe('<p>lorem & ipsum</p>');
        expect(unescape('&quot;hi!&quot;')).toBe('"hi!"');
        /* jshint -W109 */
        expect(unescape('&#x27;hi!&#x27;')).toBe('\'hi!\'');
        /* jshint +W109 */
    });

    test('Should work with empty strings', () => {
        expect(unescape('')).toBe('');
    });
});
