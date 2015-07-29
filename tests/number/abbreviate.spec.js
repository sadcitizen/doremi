'use strict';

import chai from 'chai';
import abbreviate from '../../src/number/abbreviate';

const expect = chai.expect;

describe.only('number/abbreviate()', () => {
    //it('Should round up value', () => {
    //    expect(ceil(42.42)).to.equal(43);
    //    expect(ceil(0.42)).to.equal(1);
    //});
    //
    //it('Should work with negative values', () => {
    //    expect(ceil(-42.42)).to.equal(-42);
    //    expect(ceil(-0.42)).to.equal(0);
    //});
    //
    //it('Should allow custom precision', function () {
    //    expect(ceil(5.4321, 3)).to.equal(5.433);
    //    expect(ceil(5.4321, 2)).to.equal(5.44);
    //    expect(ceil(5.4321, 1)).to.equal(5.5);
    //    expect(ceil(5.4321, 0)).to.equal(6);
    //
    //    expect(ceil(-5.4321, 3)).to.equal(-5.432);
    //    expect(ceil(-5.4321, 2)).to.equal(-5.43);
    //    expect(ceil(-5.4321, 1)).to.equal(-5.4);
    //    expect(ceil(-5.4321, 0)).to.equal(-5);
    //});
    //
    //it('Should allow custom negative precision', function () {
    //    expect(ceil(54321, -3)).to.equal(55000);
    //    expect(ceil(54321, -2)).to.equal(54400);
    //    expect(ceil(54321, -1)).to.equal(54330);
    //
    //    expect(ceil(-54321, -3)).to.equal(-54000);
    //    expect(ceil(-54321, -2)).to.equal(-54300);
    //    expect(ceil(-54321, -1)).to.equal(-54320);
    //});

    it('Should return empty string for non-numeric value', () => {
        expect(abbreviate('')).to.equal('');
        expect(abbreviate('42')).to.equal('');
        expect(abbreviate('42.42')).to.equal('');
        expect(abbreviate(void 0)).to.equal('');
        expect(abbreviate(null)).to.equal('');
        expect(abbreviate({})).to.equal('');
        expect(abbreviate([])).to.equal('');
        expect(abbreviate(true)).to.equal('');
    });
});
