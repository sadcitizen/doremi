import { expect } from 'chai';
import pad from '.';

describe('string/pad()', () => {
    it('Adds characters to the right', () => {
        expect(pad('sit', 4, '^')).to.equal('^sit');
        expect(pad('sit', 5, '^')).to.equal('^sit^');
        expect(pad('sit', 6, '^')).to.equal('^^sit^');
        expect(pad('sit', 7, '^')).to.equal('^^sit^^');
        expect(pad('sit', 8, '^')).to.equal('^^^sit^^');
    });

    it('Takes only first character of padding string', () => {
        expect(pad('sit', 6, '#')).to.equal('##sit#');
        expect(pad('sit', 7, '%#')).to.equal('%%sit%%');
        expect(pad('sit', 8, '&%#')).to.equal('&&&sit&&');
        expect(pad('sit', 9, '$&%#')).to.equal('$$$sit$$$');
    });

    it('Works with null and undefined', () => {
        expect(pad(void 0, 6, '@')).to.equal('undefined');
        expect(pad(null, 6, '@')).to.equal('@null@');
    });
});
