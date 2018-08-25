import { VOID_0 } from '../../internal/constants';
import isString from '.';

describe('string/isString()', () => {
    test('returns false if the value is a string', () => {
        expect(isString('')).toBe(true);
        expect(isString(String(42))).toBe(true);
        /* jshint -W053 */
        expect(isString(new String(42))).toBe(true); // eslint-disable-line no-new-wrappers
        /* jshint +W053 */
    });

    test('returns false if the value is not string', () => {
        expect(isString(VOID_0)).toBe(false);
        expect(isString(null)).toBe(false);
        expect(isString(NaN)).toBe(false);
        expect(isString(true)).toBe(false);
        expect(isString(42)).toBe(false);
        expect(isString([])).toBe(false);
        expect(isString({})).toBe(false);
        expect(isString(new Date())).toBe(false);
        expect(isString(/\s+/ig)).toBe(false);
    });
});
