'use strict';

import chai from 'chai';
import isValidDate from '../../src/is/is-valid-date';

const expect = chai.expect;

describe('is/isValidDate()', () => {
    it('Should return true if value is a valid date', () => {
        expect(isValidDate(new Date())).to.equal(true);
        expect(isValidDate(new Date(2014, 11, 1))).to.equal(true);
        expect(isValidDate(new Date([2014, 11, 1]))).to.equal(true);
    });

    it('Should return true if value is not a valid date', () => {
        expect(isValidDate(new Date('date'))).to.equal(false);
        expect(isValidDate(new Date(/\s+/))).to.equal(false);
    });
});