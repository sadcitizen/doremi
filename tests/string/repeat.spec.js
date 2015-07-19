'use strict';

import chai from 'chai';
import repeat from '../../src/string/repeat';

const expect = chai.expect;

describe('string/repeat()', () => {
    it('Should repeat a string n times', () => {
        expect(repeat('*', 3)).to.equal('***');
        expect(repeat(123, 2)).to.equal('123123');
        expect(repeat('lorem', 2)).to.equal('loremlorem');
        expect(repeat(' ', 5)).to.equal('     ');
        expect(repeat(' ', 0)).to.equal('');
        expect(repeat('lorem ipsum', 0)).to.equal('');
    });

    it('Should treat null and undefined as zero', () => {
        expect(repeat('lorem ipsum')).to.equal('');
        expect(repeat('lorem ipsum', void 0)).to.equal('');
        expect(repeat('lorem ipsum', null)).to.equal('');
    });

    it('Should treat a str as zero', () => {
        expect(repeat('lorem ipsum', 'null')).to.equal('');
        expect(repeat('lorem ipsum', '')).to.equal('');
    });

    it('Should work with negative counts', () => {
        expect(repeat('*', -3)).to.equal('');
        expect(repeat('lorem', -2)).to.equal('');
        expect(repeat(' ', -5)).to.equal('');
    });
});