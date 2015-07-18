'use strict';

import chai from 'chai';
import contains from '../../src/array/contains';

const expect = chai.expect;

describe('array/contains()', () => {
    let target;

    before(() => {
        target = [1, 2, 3, 4];
    });

    it('Should return true if array contains value', () => {
        expect(contains(target, 1)).to.equal(true);
        expect(contains(target, 2)).to.equal(true);
        expect(contains(target, 3)).to.equal(true);
        expect(contains(target, 4)).to.equal(true);
    });

    it('Should return false if array does not contain value', () => {
        expect(contains(target, 5)).to.equal(false);
        expect(contains(target, 6)).to.equal(false);
        expect(contains(target, 7)).to.equal(false);
    });

    it('Should work with empty arrays', () => {
        expect(contains([], 1)).to.equal(false);
        expect(contains([], null)).to.equal(false);
    });

    it('Should start search at given index', () => {
        expect(contains(target, 1, 0)).to.equal(true);
        expect(contains(target, 1, 1)).to.equal(false);
        expect(contains(target, 4, 3)).to.equal(true);
        expect(contains(target, 4, 300)).to.equal(false);
    });

    it('Should treat negative index as zero', () => {
        expect(contains(target, 4, -1)).to.equal(true);
        expect(contains(target, 2, -9)).to.equal(true);
        expect(contains(target, 5, -10)).to.equal(false);
        expect(contains(target, 2, -1)).to.equal(false);
    });
});