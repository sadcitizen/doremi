import { expect } from 'chai';
import swap from '.';

describe('string/swap()', () => {
    it('Swaps case of characters', () => {
        expect(swap('lorem ipsum')).to.equal('LOREM IPSUM');
        expect(swap('lOREM iPSUM')).to.equal('Lorem Ipsum');
        expect(swap('')).to.equal('');
    });
});
