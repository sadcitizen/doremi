import { expect } from 'chai';
import hex from '.';

describe('random/hex()', () => {
    let hexed, hex12;

    before(function () {
        hexed = hex();
        hex12 = hex(12);
    });

    it('Return a string', () => {
        expect(hexed).to.be.a('string');
        expect(hex12).to.be.a('string');

        expect(hexed.length).to.equal(1);
        expect(hex12.length).to.equal(12);
    });

    it('Hex should be a hex', () => {
        expect(hexed).to.match(/[a-f0-9]+/);
        expect(hex12).to.match(/[a-f0-9]+/);
    });
});
