import { expect } from 'chai';
import decapitalize from '.';

describe('string/decapitalize()', () => {
    it('Decapitalizes a string', () => {
        expect(decapitalize('Lorem ipsum')).to.equal('lorem ipsum');
    });

    it('Changes only first letter of a string', () => {
        expect(decapitalize('Lorem IPSUM')).to.equal('lorem IPSUM');
    });

    it('Works with empty strings', () => {
        expect(decapitalize('')).to.equal('');
        expect(decapitalize()).to.equal('undefined');
        expect(decapitalize(void 0)).to.equal('undefined');
        expect(decapitalize(null)).to.equal('null');
    });
});
