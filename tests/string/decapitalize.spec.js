'use strict';

import chai from 'chai';
import decapitalize from '../../src/string/decapitalize';

const expect = chai.expect;

describe('string/decapitalize()', () => {
    it('Should decapitalize a string', () => {
        expect(decapitalize('Lorem ipsum')).to.equal('lorem ipsum');
    });

    it('Should change only first letter of a string', () => {
        expect(decapitalize('Lorem IPSUM')).to.equal('lorem IPSUM');
    });

    it('Should work with empty strings', () => {
        expect(decapitalize('')).to.equal('');
        expect(decapitalize()).to.equal('');
        expect(decapitalize(void 0)).to.equal('');
        expect(decapitalize(null)).to.equal('');
    });
});