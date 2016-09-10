'use strict';

import chai from 'chai';
import isBlankString from '../../src/is/is-blank-string';

const expect = chai.expect;

describe('is/isBlankString()', () => {
    it('Should return true for a blank string', () => {
        expect(isBlankString('')).to.equal(true);
        expect(isBlankString('       \t \n   ')).to.equal(true);
    });

    it('Should return false for other strings', () => {
        expect(isBlankString('hello')).to.equal(false);
        expect(isBlankString('apple, orange')).to.equal(false);
        expect(isBlankString(JSON.stringify({ a: [1, 2, 3, 4], b: { c: 'd' } }))).to.equal(false);
    });
});