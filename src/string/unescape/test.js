import { expect } from 'chai';
import unescape from '.';

describe('string/unescape()', () => {
    it('Should escape a string', () => {
        expect(unescape('&lt;p&gt;hi!&lt;/p&gt;')).to.equal('<p>hi!</p>');
        expect(unescape('&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;')).to.equal('<p>lorem & ipsum</p>');
        expect(unescape('&quot;hi!&quot;')).to.equal('"hi!"');
        /* jshint -W109 */
        expect(unescape('&#x27;hi!&#x27;')).to.equal("'hi!'");
        /* jshint +W109 */
    });

    it('Should work with empty strings', () => {
        expect(unescape('')).to.equal('');
    });
});
