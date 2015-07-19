'use strict';

import chai from 'chai';
import unescape from '../../src/string/unescape';

const expect = chai.expect;

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
        expect(unescape()).to.equal('');
        expect(unescape(void 0)).to.equal('');
        expect(unescape(null)).to.equal('');
    });
});