'use strict';

import chai from 'chai';
import contains from '../../src/string/contains';

const expect = chai.expect;

describe('string/contains()', () => {
    it('Should return true if string contains substring', () => {
        expect(contains('lorem ipsum', 'rem')).to.equal(true);
        expect(contains('lorem ipsum', 'i')).to.equal(true);
        expect(contains('lorem ipsum', 'or')).to.equal(true);
        expect(contains('lorem ipsum', 'sum')).to.equal(true);
    });

    it('Should return false if string does not contain substring', () => {
        expect(contains('lorem ipsum', '!')).to.equal(false);
        expect(contains('lorem ipsum', 'foo')).to.equal(false);
        expect(contains('lorem ipsum', 'bar')).to.equal(false);
    });

    it('Should work with empty strings', () => {
        expect(contains('', '')).to.equal(true);
        expect(contains('lorem ipsum', '')).to.equal(true);
    });

    it('Should treat null as empty string', () => {
        expect(contains(null, 'lorem ipsum')).to.equal(false);
        expect(contains(null, '')).to.equal(true);
        expect(contains('lorem ipsum', null)).to.equal(true);
        expect(contains('', null)).to.equal(true);
    });

    it('Should treat undefined as empty string', () => {
        expect(contains(void 0, 'lorem ipsum')).to.equal(false);
        expect(contains(void 0, '')).to.equal(true);
        expect(contains('lorem ipsum', void 0)).to.equal(true);
        expect(contains('', void 0)).to.equal(true);
    });

    it('Should start search at given index', () => {
        expect(contains('lorem ipsum', 'l', 0)).to.equal(true);
        expect(contains('lorem ipsum', 'i', 1)).to.equal(true);
        expect(contains('lorem ipsum', 'r', 3)).to.equal(false);
        expect(contains('lorem ipsum', 's', 300)).to.equal(false);
    });

    it('Should treat negative index as zero', () => {
        expect(contains('lorem ipsum', 'o', -1)).to.equal(true);
        expect(contains('lorem ipsum', 'o', -9)).to.equal(true);
        expect(contains('lorem ipsum', 'o', -10)).to.equal(true);
        expect(contains('lorem ipsum', 'o', -11)).to.equal(true);
    });
});