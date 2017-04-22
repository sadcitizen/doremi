import { expect } from 'chai';
import padLeft from '.';

describe('string/padLeft()', () => {
    it('Adds characters to the left', () => {
        expect(padLeft('lorem', 4, '^')).to.equal('lorem');
        expect(padLeft('lorem', 5, '^')).to.equal('lorem');
        expect(padLeft('lorem', 6, '^')).to.equal('^lorem');
        expect(padLeft('lorem', 7, '^')).to.equal('^^lorem');
        expect(padLeft('lorem', 8, '^')).to.equal('^^^lorem');
    });

    it('Takes only first character of padding string', () => {
        expect(padLeft('lorem', 6, '#')).to.equal('#lorem');
        expect(padLeft('lorem', 6, '%#')).to.equal('%lorem');
        expect(padLeft('lorem', 6, '&%#')).to.equal('&lorem');
        expect(padLeft('lorem', 6, '$&%#')).to.equal('$lorem');
    });

    it('Works with null and undefined', () => {
        expect(padLeft(void 0, 5, '*')).to.equal('undefined');
        expect(padLeft(null, 5, '*')).to.equal('*null');
    });
});
