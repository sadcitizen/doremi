'use strict';

import chai from 'chai';
import words from '../../src/string/words';

const expect = chai.expect;

describe('string/words()', () => {
    it('Should return an array of words', () => {
        expect(words('lorem ipsum dolor sit')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
        expect(words('      lorem        ipsum         dolor        sit     ')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
        expect(words('lorem-ipsum-dolor-sit', '-')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
        expect(words('lorem_ipsum_dolor_sit', '_')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
        expect(words(123)).to.deep.equal(['123']);
    });

    it('Should work with blank strings', () => {
        expect(words('')).to.deep.equal([]);
        expect(words('                ')).to.deep.equal([]);
    });

    it('Should treat null and undefined as empty string', () => {
        expect(words()).to.deep.equal([]);
        expect(words(void 0)).to.deep.equal([]);
        expect(words(null)).to.deep.equal([]);
    });
});