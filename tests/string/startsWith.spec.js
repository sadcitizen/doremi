'use strict';

import chai from 'chai';
import startsWith from '../../src/string/startsWith';

const expect = chai.expect;

describe('string/startsWith()', () => {
    it('Should return true if string starts with another string', () => {
        expect(startsWith('lorem ipsum', 'lorem')).to.equal(true);
        expect(startsWith('foo bar', 'foo')).to.equal(true);
        expect(startsWith(12345, 12)).to.equal(true);
    });

    it('Should return false if string does not starts with another string', () => {
        expect(startsWith('lorem ipsum', 'ipsum')).to.equal(false);
        expect(startsWith('foo bar', 'bar')).to.equal(false);
    });

    it('Should return true if string for search is empty', () => {
        expect(startsWith('', '')).to.equal(true);
        expect(startsWith('lorem', '')).to.equal(true);
    });

    it('Should treat null and undefined as empty string', () => {
        expect(startsWith(void 0, 'ipsum')).to.equal(false);
        expect(startsWith('lorem', void 0)).to.equal(true);
        expect(startsWith(null, '')).to.equal(true);
        expect(startsWith('lorem', null)).to.equal(true);
    });
});