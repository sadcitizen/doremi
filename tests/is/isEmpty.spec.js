'use strict';

import chai from 'chai';
import isEmpty from '../../src/is/isEmpty';

const expect = chai.expect;

describe('is/isEmpty()', () => {
    const fn = function () {
        return arguments;
    };

    it('Should return true if value is an empty string', () => {
        expect(isEmpty('')).to.equal(true);
    });

    it('Should return false if value is not an empty string', () => {
        expect(isEmpty('hello')).to.equal(false);
    });

    it('Should return true if value is an empty object', () => {
        expect(isEmpty({})).to.equal(true);
    });

    it('Should return false if value is not an empty object', () => {
        expect(isEmpty({a: 'b', c: 'd'})).to.equal(false);
    });

    it('Should return true if value is an empty array', () => {
        expect(isEmpty([])).to.equal(true);
    });

    it('Should return false if value is not an empty array', () => {
        expect(isEmpty([1, 2, 3, 4])).to.equal(false);
    });

    it('Should return true if value is an empty arguments', () => {
        expect(isEmpty(fn())).to.equal(true);
    });

    it('Should return false if value is not an empty arguments', () => {
        expect(isEmpty(fn(1, 2, 3, 4))).to.equal(false);
    });

    it('Should return true if value is not an enumerable', () => {
        expect(isEmpty(null)).to.equal(true);
        expect(isEmpty(undefined)).to.equal(true);
        expect(isEmpty(0)).to.equal(true);
        expect(isEmpty(42)).to.equal(true);
        expect(isEmpty(-42)).to.equal(true);
        expect(isEmpty(NaN)).to.equal(true);
        expect(isEmpty(Infinity)).to.equal(true);
        expect(isEmpty(-Infinity)).to.equal(true);
        expect(isEmpty(true)).to.equal(true);
        expect(isEmpty(false)).to.equal(true);
    });
});