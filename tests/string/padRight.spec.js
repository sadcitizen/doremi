'use strict';

import chai from 'chai';
import padRight from '../../src/string/pad-right';

const expect = chai.expect;

describe('string/padRight()', () => {
    it('Should add characters to the right', () => {
        expect(padRight('lorem', 4, '^')).to.equal('lorem');
        expect(padRight('lorem', 5, '^')).to.equal('lorem');
        expect(padRight('lorem', 6, '^')).to.equal('lorem^');
        expect(padRight('lorem', 7, '^')).to.equal('lorem^^');
        expect(padRight('lorem', 8, '^')).to.equal('lorem^^^');
    });

    it('Should take only first character of padding string', () => {
        expect(padRight('lorem', 6, '#')).to.equal('lorem#');
        expect(padRight('lorem', 6, '%#')).to.equal('lorem%');
        expect(padRight('lorem', 6, '&%#')).to.equal('lorem&');
        expect(padRight('lorem', 6, '$&%#')).to.equal('lorem$');
    });

    it('Should treat null and undefined padding string as space', () => {
        expect(padRight(void 0, 5, '*')).to.equal('*****');
        expect(padRight(null, 5, '*')).to.equal('*****');
    });

    it('Should treat null and undefined padding string as space', () => {
        expect(padRight('lorem')).to.equal('lorem');
        expect(padRight('lorem', 10, void 0)).to.equal('lorem     ');
        expect(padRight('lorem', 10, null)).to.equal('lorem     ');
    });
});