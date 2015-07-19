'use strict';

import chai from 'chai';
import escape from '../../src/string/escape';

const expect = chai.expect;

describe('string/escape()', () => {
    it('Should escape a string', () => {
        expect(escape('<p>hi!</p>')).to.equal('&lt;p&gt;hi!&lt;/p&gt;');
        expect(escape('<p>lorem & ipsum</p>')).to.equal('&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;');
        expect(escape('"hi!"')).to.equal('&quot;hi!&quot;');
        /* jshint -W109 */
        expect(escape("'hi!'")).to.equal('&#x27;hi!&#x27;');
        /* jshint +W109 */
    });

    it('Should not escape an escaped string', () => {
        expect(escape('lorem &amp; ipsum')).to.equal('lorem &amp; ipsum');
        expect(escape('&lt;p&gt;hi!&lt;/p&gt;')).to.equal('&lt;p&gt;hi!&lt;/p&gt;');
        expect(escape('&#x27;hi!&#x27; & bye!')).to.equal('&#x27;hi!&#x27; &amp; bye!');
    });

    it('Should work with empty strings', () => {
        expect(escape('')).to.equal('');
        expect(escape()).to.equal('');
        expect(escape(void 0)).to.equal('');
        expect(escape(null)).to.equal('');
    });
});