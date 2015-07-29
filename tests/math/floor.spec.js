'use strict';

import chai from 'chai';
import floor from '../../src/math/floor';

const expect = chai.expect;

describe('math/floor()', () => {
    it('Should round down value', () => {
        expect(floor(42.42)).to.equal(42);
        expect(floor(0.42)).to.equal(0);
    });

    it('Should work with negative values', () => {
        expect(floor(-42.42)).to.equal(-43);
        expect(floor(-0.42)).to.equal(-1);
    });

    it('Should allow custom precision', function () {
        expect(floor(5.4321, 3)).to.equal(5.432);
        expect(floor(5.4321, 2)).to.equal(5.43);
        expect(floor(5.4321, 1)).to.equal(5.4);
        expect(floor(5.4321, 0)).to.equal(5);

        expect(floor(-5.4321, 3)).to.equal(-5.433);
        expect(floor(-5.4321, 2)).to.equal(-5.44);
        expect(floor(-5.4321, 1)).to.equal(-5.5);
        expect(floor(-5.4321, 0)).to.equal(-6);
    });

    it('Should allow custom negative precision', function () {
        expect(floor(54321, -3)).to.equal(54000);
        expect(floor(54321, -2)).to.equal(54300);
        expect(floor(54321, -1)).to.equal(54320);

        expect(floor(-54321, -3)).to.equal(-55000);
        expect(floor(-54321, -2)).to.equal(-54400);
        expect(floor(-54321, -1)).to.equal(-54330);
    });

    it('Should return NaN for non-numeric value', () => {
        expect(floor('')).to.deep.equal(NaN);
        expect(floor('42')).to.deep.equal(NaN);
        expect(floor('42.42')).to.deep.equal(NaN);
        expect(floor(void 0)).to.deep.equal(NaN);
        expect(floor(null)).to.deep.equal(NaN);
        expect(floor({})).to.deep.equal(NaN);
        expect(floor([])).to.deep.equal(NaN);
        expect(floor(true)).to.deep.equal(NaN);
    });
});