'use strict';

import chai from 'chai';
import truncate from '../../src/string/truncate';

const expect = chai.expect;

describe('string/truncate()', () => {
    var string = 'lorem ipsum dolor sit amet';

    it('Should limit number of chars', () => {
        expect(truncate(string, 10)).to.have.length.below(11);
        expect(truncate(string, 10)).to.equal('lorem i...');

        expect(truncate(string, 14)).to.have.length.below(15);
        expect(truncate(string, 14)).to.equal('lorem ipsum...');
    });

    it('Should append string param', () => {
        var truncated = truncate(string, 10, '--');
        expect(truncated).to.have.length.below(11);
        expect(truncated).to.equal('lorem ip--');
    });

    it('Should allow cropping at full words', () => {
        expect(truncate(string, 10, '*', true)).to.have.length.below(11);
        expect(truncate(string, 10, '*', true)).to.equal('lorem*');

        expect(truncate(string, 14, null, true)).to.have.length.below(15);
        expect(truncate(string, 14, null, true)).to.equal('lorem ipsum...');
    });
});