import type from '.';
import noop from '../../func/noop';

describe('common/type()', () => {
    test('returns a type of value', () => {
        expect(type(arguments)).toBe('arguments');

        expect(type([])).toBe('array');
        expect(type(new Array(1, 2, 3))).toBe('array');

        expect(type(true)).toBe('boolean');
        /* jshint -W053 */
        expect(type(new Boolean(false))).toBe('boolean');
        /* jshint +W053 */
        expect(type(Boolean(true))).toBe('boolean');

        expect(type(new Date())).toBe('date');

        expect(type(noop)).toBe('function');
        /* jshint -W054 */
        expect(type(new Function('return true'))).toBe('function');
        /* jshint +W054 */
        expect(type(Math.abs)).toBe('function');

        expect(type(undefined)).toBe('undefined');

        expect(type(NaN)).toBe('nan');

        expect(type(42)).toBe('number');
        /* jshint -W053 */
        expect(type(new Number(42))).toBe('number');
        /* jshint +W053 */
        expect(type(Number(42))).toBe('number');
        expect(type(0)).toBe('number');
        expect(type(-0)).toBe('number');

        expect(type(Infinity)).toBe('infinity');

        expect(type(null)).toBe('null');

        expect(type({})).toBe('object');

        expect(type(/\s+/ig)).toBe('regexp');
        expect(type(new RegExp('\\s+', 'ig'))).toBe('regexp');

        expect(type('foo')).toBe('string');
        /* jshint -W053 */
        expect(type(new String('foo'))).toBe('string');
        /* jshint +W053 */
        expect(type(String('foo'))).toBe('string');
        expect(type('')).toBe('string');
    });
});
