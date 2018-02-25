import escape from '.';

describe('string/escape()', () => {
    test('Escapes a string', () => {
        expect(escape('<p>hi!</p>')).toBe('&lt;p&gt;hi!&lt;/p&gt;');
        expect(escape('<p>lorem & ipsum</p>')).toBe('&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;');
        expect(escape('"hi!"')).toBe('&quot;hi!&quot;');
        /* jshint -W109 */
        expect(escape("'hi!'")).toBe('&#x27;hi!&#x27;');
        /* jshint +W109 */
    });

    test('Does not escape an escaped string', () => {
        expect(escape('lorem &amp; ipsum')).toBe('lorem &amp; ipsum');
        expect(escape('&lt;p&gt;hi!&lt;/p&gt;')).toBe('&lt;p&gt;hi!&lt;/p&gt;');
        expect(escape('&#x27;hi!&#x27; & bye!')).toBe('&#x27;hi!&#x27; &amp; bye!');
    });

    test('works with empty strings', () => {
        expect(escape('')).toBe('');
        expect(escape()).toBe('undefined');
        expect(escape(void 0)).toBe('undefined');
        expect(escape(null)).toBe('null');
    });
});
