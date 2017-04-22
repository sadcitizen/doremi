import { expect } from 'chai';
import padRight from '.';

describe('string/padRight()', () => {
    it('Adds characters to the right', () => {
        expect(padRight('lorem', 4, '^')).to.equal('lorem');
        expect(padRight('lorem', 5, '^')).to.equal('lorem');
        expect(padRight('lorem', 6, '^')).to.equal('lorem^');
        expect(padRight('lorem', 7, '^')).to.equal('lorem^^');
        expect(padRight('lorem', 8, '^')).to.equal('lorem^^^');
    });

    it('Takes only first character of padding string', () => {
        expect(padRight('lorem', 6, '#')).to.equal('lorem#');
        expect(padRight('lorem', 6, '%#')).to.equal('lorem%');
        expect(padRight('lorem', 6, '&%#')).to.equal('lorem&');
        expect(padRight('lorem', 6, '$&%#')).to.equal('lorem$');
    });

    it('Works with null and undefined', () => {
        expect(padRight(void 0, 5, '*')).to.equal('undefined');
        expect(padRight(null, 5, '*')).to.equal('null*');
    });
});
