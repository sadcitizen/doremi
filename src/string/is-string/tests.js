import isString from '.';

describe('string/isString()', () => {
    test('returns false if value is a string', () => {
        expect(isString('')).toBe(true);
        expect(isString(String(42))).toBe(true);
        /* jshint -W053 */
        expect(isString(new String(42))).toBe(true);
        /* jshint +W053 */
    });

    test('returns false if value is not string', () => {
        expect(isString(void 0)).toBe(false);
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
