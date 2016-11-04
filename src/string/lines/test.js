import { expect } from 'chai';
import lines from '.';

describe('string/lines()', () => {
    it('Returns an array of lines', () => {
        expect(lines('lorem\r\nipsum')).to.deep.equal(['lorem', 'ipsum']);
        expect(lines('lorem ipsum')).to.deep.equal(['lorem ipsum']);
        expect(lines('lorem\ripsum')).to.deep.equal(['lorem\ripsum']);
    });

    it('Works with empty strings', () => {
        expect(lines('')).to.deep.equal(['']);
        expect(lines('            ')).to.deep.equal(['            ']);
        expect(lines(' \t ')).to.deep.equal([' \t ']);
        expect(lines(' \n ')).to.deep.equal([' ', ' ']);
    });
});
