'use strict';

import chai from 'chai';
import abbreviate from '../../src/number/abbreviate';

const expect = chai.expect;

describe.only('number/abbreviate()', () => {
    it('Should abbreviate numbers', () => {
        expect(abbreviate(1234)).to.equal('1.23k');
        expect(abbreviate(12345)).to.equal('12.34k');
        expect(abbreviate(123456)).to.equal('123.45k');
        expect(abbreviate(1234567)).to.equal('1.23M');
        expect(abbreviate(12345678)).to.equal('12.34M');
        expect(abbreviate(123456789)).to.equal('123.45M');
        expect(abbreviate(1234567890)).to.equal('1.23G');
        expect(abbreviate(12345678901)).to.equal('12.34G');
        expect(abbreviate(123456789012)).to.equal('123.45G');
    });

    it('Should abbreviate negative numbers', () => {
        expect(abbreviate(-1234)).to.equal('-1.23k');
        expect(abbreviate(-12345)).to.equal('-12.34k');
        expect(abbreviate(-123456)).to.equal('-123.45k');
        expect(abbreviate(-1234567)).to.equal('-1.23M');
        expect(abbreviate(-12345678)).to.equal('-12.34M');
        expect(abbreviate(-123456789)).to.equal('-123.45M');
        expect(abbreviate(-1234567890)).to.equal('-1.23G');
        expect(abbreviate(-12345678901)).to.equal('-12.34G');
        expect(abbreviate(-123456789012)).to.equal('-123.45G');
    });

    it('Should work with custom precision', () => {
        expect(abbreviate(1234567, 1)).to.equal('1.2M');
        expect(abbreviate(1234567, 2)).to.equal('1.23M');
        expect(abbreviate(1234567, 3)).to.equal('1.234M');
        expect(abbreviate(1234567, 4)).to.equal('1.2345M');
        expect(abbreviate(1234, 6)).to.equal('1.234000k');
    });

    it('Should work with custom dictionary', () => {
        const hz = { kilo: ' кГц', mega: ' МГц', giga: ' ГГц' };

        expect(abbreviate(1234, 2, hz)).to.equal('1.23 кГц');
        expect(abbreviate(12345, 2, hz)).to.equal('12.34 кГц');
        expect(abbreviate(123456, 2, hz)).to.equal('123.45 кГц');
        expect(abbreviate(1234567, 2, hz)).to.equal('1.23 МГц');
        expect(abbreviate(12345678, 2, hz)).to.equal('12.34 МГц');
        expect(abbreviate(123456789, 2, hz)).to.equal('123.45 МГц');
        expect(abbreviate(1234567890, 2, hz)).to.equal('1.23 ГГц');
        expect(abbreviate(12345678901, 2, hz)).to.equal('12.34 ГГц');
        expect(abbreviate(123456789012, 2, hz)).to.equal('123.45 ГГц');
    });

    it('Should return empty string for non-numeric value', () => {
        expect(abbreviate('')).to.equal('');
        expect(abbreviate('42')).to.equal('');
        expect(abbreviate('42.42')).to.equal('');
        expect(abbreviate(void 0)).to.equal('');
        expect(abbreviate(null)).to.equal('');
        expect(abbreviate({})).to.equal('');
        expect(abbreviate([])).to.equal('');
        expect(abbreviate(true)).to.equal('');
    });
});
