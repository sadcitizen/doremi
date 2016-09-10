'use strict';

import chai from 'chai';
import isExists from '../../src/is/is-exists';

const expect = chai.expect;

describe('is/isExists()', () => {
    it('Should return false if value is undefined', () => {
        expect(isExists()).to.equal(false);
        expect(isExists(undefined)).to.equal(false);
    });

    it('Should return false if value is null', () => {
        expect(isExists(null)).to.equal(false);
    });

    it('Should return true for other values', () => {
        expect(isExists(0)).to.equal(true);
        expect(isExists(42)).to.equal(true);
        expect(isExists(-42)).to.equal(true);
        expect(isExists(NaN)).to.equal(true);
        expect(isExists(Infinity)).to.equal(true);
        expect(isExists(-Infinity)).to.equal(true);
        expect(isExists(true)).to.equal(true);
        expect(isExists(false)).to.equal(true);
        expect(isExists('')).to.equal(true);
        expect(isExists('hello')).to.equal(true);
        expect(isExists([])).to.equal(true);
        expect(isExists([1, 2, 3])).to.equal(true);
        expect(isExists({})).to.equal(true);
        expect(isExists({a: 'b', c: 'd'})).to.equal(true);
    });
});