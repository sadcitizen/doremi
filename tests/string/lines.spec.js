'use strict';

import chai from 'chai';
import lines from '../../src/string/lines';

const expect = chai.expect;

describe('string/lines()', () => {
    it('Should return an array of lines', () => {
        expect(lines('lorem\r\nipsum')).to.deep.equal(['lorem', 'ipsum']);
        expect(lines('lorem ipsum')).to.deep.equal(['lorem ipsum']);
        expect(lines('lorem\ripsum')).to.deep.equal(['lorem\ripsum']);
    });

    it('Should work with empty strings', () => {
        expect(lines('')).to.deep.equal(['']);
        expect(lines('            ')).to.deep.equal(['            ']);
        expect(lines(' \t ')).to.deep.equal([' \t ']);
        expect(lines(' \n ')).to.deep.equal([' ', ' ']);
    });

    it('Should treat null and undefined as empty string', () => {
        expect(lines()).to.deep.equal(['']);
        expect(lines(void 0)).to.deep.equal(['']);
        expect(lines(null)).to.deep.equal(['']);
    });
});