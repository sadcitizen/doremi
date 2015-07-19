'use strict';

import chai from 'chai';
import int from '../../src/random/int';
import isInt from '../../src/is/isInteger';

const expect = chai.expect;

describe('random/int()', () => {
    let num, range;

    before(() => {
        num = int();
        range = int(0, 1000);
    });

    it('Should return a integer', () => {
        expect(isInt(num)).to.equal(true);
        expect(isInt(range)).to.equal(true);
    });

    it('Should return an integer inside range', () => {
        expect(range > 0 && range < 1000).to.equal(true);
    });
});