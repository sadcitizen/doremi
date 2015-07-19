'use strict';

import chai from 'chai';
import endsWith from '../../src/string/endsWith';

const expect = chai.expect;

describe('string/endsWith()', () => {
    it('Should return true if string ends with another string', () => {
        expect(endsWith('lorem ipsum', 'ipsum')).to.equal(true);
        expect(endsWith('foo bar', 'bar')).to.equal(true);
        expect(endsWith(12345, 45)).to.equal(true);
    });

    it('Should return false if string does not ends with another string', () => {
        expect(endsWith('lorem ipsum', 'lorem')).to.equal(false);
        expect(endsWith('foo bar', 'foo')).to.equal(false);
    });

    it('Should return true if string for search is empty', () => {
        expect(endsWith('', '')).to.equal(true);
        expect(endsWith('lorem', '')).to.equal(true);
    });

    it('Should treat null and undefined as empty string', () => {
        expect(endsWith(void 0, 'ipsum')).to.equal(false);
        expect(endsWith('lorem', void 0)).to.equal(true);
        expect(endsWith(null, '')).to.equal(true);
        expect(endsWith('lorem', null)).to.equal(true);
    });
});