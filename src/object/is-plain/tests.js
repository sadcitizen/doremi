import isPlain from '.';

describe('object/isPlain()', () => {
    test('returns true if value is a plain object', () => {
        expect(isPlain({})).toBe(true);
        expect(isPlain({ lorem: 'ipsum' })).toBe(true);
        /* jshint -W053, -W010 */
        expect(isPlain(new Object())).toBe(true);
        /* jshint +W053, +W010 */
    });

    test('returns false if value is an object created with constructor function', () => {
        function Noop() {}
        Noop.prototype.useless = function () {};
        const noop = new Noop();

        expect(isPlain(noop)).toBe(false);
    });

    test('returns false if value is not an object', () => {
        expect(isPlain(void 0)).toBe(false);
        expect(isPlain(null)).toBe(false);
        expect(isPlain(NaN)).toBe(false);
        expect(isPlain(true)).toBe(false);
        expect(isPlain(0)).toBe(false);
        expect(isPlain('')).toBe(false);
        expect(isPlain([])).toBe(false);
        expect(isPlain(new Date())).toBe(false);
        expect(isPlain(/\s+/ig)).toBe(false);
    });
});
