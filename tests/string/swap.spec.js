'use strict';

import chai from 'chai';
import swap from '../../src/string/swap';

const expect = chai.expect;

describe('string/swap()', () => {
    it('Should swap case of characters', () => {
        expect(swap('lorem ipsum')).to.equal('LOREM IPSUM');
        expect(swap('lOREM iPSUM')).to.equal('Lorem Ipsum');
        expect(swap('')).to.equal('');
    });

    it('Should treat null and undefined as empty string', () => {
        expect(swap()).to.equal('');
        expect(swap(void 0)).to.equal('');
        expect(swap(null)).to.equal('');
    });
});
