'use strict';

import chai from 'chai';
import pad from '../../src/string/pad';

const expect = chai.expect;

describe('string/pad()', () => {
    it('Should add characters to the right', () => {
        expect(pad('sit', 4, '^')).to.equal('^sit');
        expect(pad('sit', 5, '^')).to.equal('^sit^');
        expect(pad('sit', 6, '^')).to.equal('^^sit^');
        expect(pad('sit', 7, '^')).to.equal('^^sit^^');
        expect(pad('sit', 8, '^')).to.equal('^^^sit^^');
    });

    it('Should take only first character of padding string', () => {
        expect(pad('sit', 6, '#')).to.equal('##sit#');
        expect(pad('sit', 7, '%#')).to.equal('%%sit%%');
        expect(pad('sit', 8, '&%#')).to.equal('&&&sit&&');
        expect(pad('sit', 9, '$&%#')).to.equal('$$$sit$$$');
    });

    it('Should treat null and undefined padding string as space', () => {
        expect(pad('', 5, '@')).to.equal('@@@@@');
        expect(pad(void 0, 5, '@')).to.equal('@@@@@');
        expect(pad(null, 5, '@')).to.equal('@@@@@');
    });

    it('Should treat null and undefined padding string as space', () => {
        expect(pad('sit')).to.equal('sit');
        expect(pad('sit', 9, void 0)).to.equal('   sit   ');
        expect(pad('sit', 9, null)).to.equal('   sit   ');
    });
});