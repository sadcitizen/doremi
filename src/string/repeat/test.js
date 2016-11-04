import { expect } from 'chai';
import repeat from '.';

describe('string/repeat()', () => {
    it('Repeats a string', () => {
        expect(repeat('*', 3)).to.equal('***');
        expect(repeat(123, 2)).to.equal('123123');
        expect(repeat('lorem', 2)).to.equal('loremlorem');
        expect(repeat(' ', 5)).to.equal('     ');
        expect(repeat(' ', 0)).to.equal('');
        expect(repeat('lorem ipsum', 0)).to.equal('');
    });

    it('Treat null and undefined as zero', () => {
        expect(repeat('lorem ipsum')).to.equal('');
        expect(repeat('lorem ipsum', void 0)).to.equal('');
        expect(repeat('lorem ipsum', null)).to.equal('');
    });

    it('Treat a str as zero', () => {
        expect(repeat('lorem ipsum', 'null')).to.equal('');
        expect(repeat('lorem ipsum', '')).to.equal('');
    });

    it('Works with negative counts', () => {
        expect(repeat('*', -3)).to.equal('');
        expect(repeat('lorem', -2)).to.equal('');
        expect(repeat(' ', -5)).to.equal('');
    });
});
