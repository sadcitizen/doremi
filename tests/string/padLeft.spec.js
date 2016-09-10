'use strict';

import chai from 'chai';
import padLeft from '../../src/string/pad-left';

const expect = chai.expect;

describe('string/padLeft()', () => {
    it('Should add characters to the left', () => {
        expect(padLeft('lorem', 4, '^')).to.equal('lorem');
        expect(padLeft('lorem', 5, '^')).to.equal('lorem');
        expect(padLeft('lorem', 6, '^')).to.equal('^lorem');
        expect(padLeft('lorem', 7, '^')).to.equal('^^lorem');
        expect(padLeft('lorem', 8, '^')).to.equal('^^^lorem');
    });

    it('Should take only first character of padding string', () => {
        expect(padLeft('lorem', 6, '#')).to.equal('#lorem');
        expect(padLeft('lorem', 6, '%#')).to.equal('%lorem');
        expect(padLeft('lorem', 6, '&%#')).to.equal('&lorem');
        expect(padLeft('lorem', 6, '$&%#')).to.equal('$lorem');
    });

    it('Should treat null and undefined padding string as space', () => {
        expect(padLeft(void 0, 5, '*')).to.equal('*****');
        expect(padLeft(null, 5, '*')).to.equal('*****');
    });

    it('Should treat null and undefined padding string as space', () => {
        expect(padLeft('lorem')).to.equal('lorem');
        expect(padLeft('lorem', 10, void 0)).to.equal('     lorem');
        expect(padLeft('lorem', 10, null)).to.equal('     lorem');
    });
});