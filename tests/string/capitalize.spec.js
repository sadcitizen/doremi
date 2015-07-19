'use strict';

import chai from 'chai';
import capitalize from '../../src/string/capitalize';

const expect = chai.expect;

describe('string/capitalize()', () => {
    it('Should capitalize a string', () => {
        expect(capitalize('lorem ipsum')).to.equal('Lorem ipsum');
    });

    it('Should change only first letter of a string', () => {
        expect(capitalize('lorem IPSUM')).to.equal('Lorem IPSUM');
    });

    it('Should work with empty string', () => {
        expect(capitalize('')).to.equal('');
        expect(capitalize()).to.equal('');
        expect(capitalize(void 0)).to.equal('');
        expect(capitalize(null)).to.equal('');
    });
});