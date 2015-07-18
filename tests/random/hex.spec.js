'use strict';

import chai from 'chai';
import hex from '../../src/random/hex';
import type from '../../src/is/type';

const expect = chai.expect;

describe('random/hex()', () => {
    let hexed, hex12;

    before(function () {
        hexed = hex();
        hex12 = hex(12);
    });

    it('Should return a string', () => {
        expect(type(hexed)).to.equal('string');
        expect(type(hex12)).to.equal('string');

        expect(hexed.length).to.equal(1);
        expect(hex12.length).to.equal(12);
    });

    it('Hex should be a hex', () => {
        expect(hexed).to.match(/[a-f0-9]+/);
        expect(hex12).to.match(/[a-f0-9]+/);
    });
});