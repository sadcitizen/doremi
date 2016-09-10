'use strict';

import chai from 'chai';
import isPrimitive from '../../src/is/is-primitive';

const expect = chai.expect;

describe('is/isPrimitive()', () => {
    it('Boolean should be primitive', () => {
        expect(isPrimitive(true)).to.equal(true);
        expect(isPrimitive(false)).to.equal(true);
        /* jshint -W053 */
        expect(isPrimitive(new Boolean(false))).to.equal(true);
        /* jshint +W053 */
        expect(isPrimitive(Boolean(true))).to.equal(true);
    });

    it('String should be primitive', () => {
        expect(isPrimitive('foo')).to.equal(true);
        /* jshint -W053 */
        expect(isPrimitive(new String('foo'))).to.equal(true);
        /* jshint +W053 */
        expect(isPrimitive(String('foo'))).to.equal(true);
        expect(isPrimitive('')).to.equal(true);
    });

    it('Number should be primitive', () => {
        expect(isPrimitive(42)).to.equal(true);
        /* jshint -W053 */
        expect(isPrimitive(new Number(42))).to.equal(true);
        /* jshint +W053 */
        expect(isPrimitive(Number(42))).to.equal(true);
        expect(isPrimitive(0)).to.equal(true);
        expect(isPrimitive(-0)).to.equal(true);
    });

    it('Null should be primitive', () => {
        expect(isPrimitive(null)).to.equal(true);
    });

    it('Undefined should be primitive', () => {
        expect(isPrimitive(undefined)).to.equal(true);
        expect(isPrimitive()).to.equal(true);
    });
});