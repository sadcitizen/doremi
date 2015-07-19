'use strict';

import chai from 'chai';
import isPlainObject from '../../src/is/isPlainObject';

const expect = chai.expect;

describe('is/isPlainObject()', () => {
    it('Should return true if value is a plain object', () => {
        expect(isPlainObject({})).to.equal(true);
        expect(isPlainObject({ lorem: 'ipsum' })).to.equal(true);
        /* jshint -W053, -W010 */
        expect(isPlainObject(new Object())).to.equal(true);
        /* jshint +W053, +W010 */
    });

    it('Should return false if value is an object created with constructor function', () => {
        function Noop() {}
        Noop.prototype.useless = function () {};
        const noop = new Noop();

        expect(isPlainObject(noop)).to.equal(false);
    });

    it('Should return false if value is not an object', () => {
        expect(isPlainObject(void 0)).to.equal(false);
        expect(isPlainObject(null)).to.equal(false);
        expect(isPlainObject(NaN)).to.equal(false);
        expect(isPlainObject(true)).to.equal(false);
        expect(isPlainObject(0)).to.equal(false);
        expect(isPlainObject('')).to.equal(false);
        expect(isPlainObject([])).to.equal(false);
        expect(isPlainObject(new Date())).to.equal(false);
        expect(isPlainObject(/\s+/ig)).to.equal(false);
    });
});