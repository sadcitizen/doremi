import { expect } from 'chai';
import escape from '.';

describe('string/escape()', () => {
    it('Escapes a string', () => {
        expect(escape('<p>hi!</p>')).to.equal('&lt;p&gt;hi!&lt;/p&gt;');
        expect(escape('<p>lorem & ipsum</p>')).to.equal('&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;');
        expect(escape('"hi!"')).to.equal('&quot;hi!&quot;');
        /* jshint -W109 */
        expect(escape("'hi!'")).to.equal('&#x27;hi!&#x27;');
        /* jshint +W109 */
    });

    it('Do not escape an escaped string', () => {
        expect(escape('lorem &amp; ipsum')).to.equal('lorem &amp; ipsum');
        expect(escape('&lt;p&gt;hi!&lt;/p&gt;')).to.equal('&lt;p&gt;hi!&lt;/p&gt;');
        expect(escape('&#x27;hi!&#x27; & bye!')).to.equal('&#x27;hi!&#x27; &amp; bye!');
    });

    it('Works with empty strings', () => {
        expect(escape('')).to.equal('');
        expect(escape()).to.equal('undefined');
        expect(escape(void 0)).to.equal('undefined');
        expect(escape(null)).to.equal('null');
    });
});
