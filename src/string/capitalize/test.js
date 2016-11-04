import { expect } from 'chai';
import capitalize from '.';

describe('string/capitalize()', () => {
    it('Capitalizes a string', () => {
        expect(capitalize('lorem ipsum')).to.equal('Lorem ipsum');
    });

    it('Changes only first letter of a string', () => {
        expect(capitalize('lorem IPSUM')).to.equal('Lorem IPSUM');
    });

    it('Works with empty string', () => {
        expect(capitalize('')).to.equal('');
        expect(capitalize()).to.equal('Undefined');
        expect(capitalize(void 0)).to.equal('Undefined');
        expect(capitalize(null)).to.equal('Null');
    });
});
