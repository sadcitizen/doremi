'use strict';

import chai from 'chai';
import randomInteger from '../../src/random/integer';
import isInteger from '../../src/is/is-integer';

const expect = chai.expect;

describe('random/integer()', () => {
    let num, range;

    before(() => {
        num = randomInteger();
        range = randomInteger(0, 1000);
    });

    it('Should return a integer', () => {
        expect(isInteger(num)).to.equal(true);
        expect(isInteger(range)).to.equal(true);
    });

    it('Should return an integer inside range', () => {
        expect(range > 0 && range < 1000).to.equal(true);
    });
});