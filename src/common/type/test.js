import { expect } from 'chai';
import type from '.';
import noop from '../../func/noop';

describe('common/type()', () => {
    it('Returns a type of value', () => {
        expect(type(arguments)).to.equal('arguments');

        expect(type([])).to.equal('array');
        expect(type(new Array(1, 2, 3))).to.equal('array');

        expect(type(true)).to.equal('boolean');
        /* jshint -W053 */
        expect(type(new Boolean(false))).to.equal('boolean');
        /* jshint +W053 */
        expect(type(Boolean(true))).to.equal('boolean');

        expect(type(new Date())).to.equal('date');

        expect(type(noop)).to.equal('function');
        /* jshint -W054 */
        expect(type(new Function('return true'))).to.equal('function');
        /* jshint +W054 */
        expect(type(Math.abs)).to.equal('function');

        expect(type(undefined)).to.equal('undefined');

        expect(type(NaN)).to.equal('nan');

        expect(type(42)).to.equal('number');
        /* jshint -W053 */
        expect(type(new Number(42))).to.equal('number');
        /* jshint +W053 */
        expect(type(Number(42))).to.equal('number');
        expect(type(0)).to.equal('number');
        expect(type(-0)).to.equal('number');

        expect(type(Infinity)).to.equal('infinity');

        expect(type(null)).to.equal('null');

        expect(type({})).to.equal('object');

        expect(type(/\s+/ig)).to.equal('regexp');
        expect(type(new RegExp('\\s+', 'ig'))).to.equal('regexp');

        expect(type('foo')).to.equal('string');
        /* jshint -W053 */
        expect(type(new String('foo'))).to.equal('string');
        /* jshint +W053 */
        expect(type(String('foo'))).to.equal('string');
        expect(type('')).to.equal('string');
    });
});
