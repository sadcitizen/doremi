'use strict';

import chai from 'chai';
import isHex from '../../src/is/is-hex';

const expect = chai.expect;

describe('is/isHex()', () => {
    it('Should return true for a hex string', () => {
        expect(isHex('ff')).to.equal(true);
        expect(isHex('00ffcc')).to.equal(true);
        expect(isHex('0123456789AaBbCcDdEeFf')).to.equal(true);
    });

    it('Should return false for other strings', () => {
        expect(isHex('')).to.equal(false);
        expect(isHex('  ')).to.equal(false);
        expect(isHex('hello')).to.equal(false);
        expect(isHex('apple, orange')).to.equal(false);
    });
});
