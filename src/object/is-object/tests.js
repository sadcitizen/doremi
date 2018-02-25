import isObject from '.';

describe('object/isObject()', () => {
    test('returns true if value is an object', () => {
        function Noop() {}
        const noop = new Noop();

        expect(isObject({})).toBe(true);
        expect(isObject({ a: 'b', c: 'd' })).toBe(true);
        /* jshint -W057 */
        expect(isObject(noop)).toBe(true);
        /* jshint +W057 */
        /* jshint -W053, -W010 */
        expect(isObject(new Object())).toBe(true);
        /* jshint +W053, +W010 */
    });

    test('returns false if value is not an object', () => {
        expect(isObject(void 0)).toBe(false);
        expect(isObject(null)).toBe(false);
        expect(isObject(NaN)).toBe(false);
        expect(isObject(true)).toBe(false);
        expect(isObject(0)).toBe(false);
        expect(isObject('')).toBe(false);
        expect(isObject([])).toBe(false);
        expect(isObject(new Date())).toBe(false);
        expect(isObject(/\s+/ig)).toBe(false);
    });
});
