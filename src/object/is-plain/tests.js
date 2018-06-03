import { VOID_0 } from '../../internal/constants';
import isPlain from '.';

describe('object/isPlain()', () => {
    test('returns true if value is a plain object', () => {
        expect(isPlain({})).toBe(true);
        expect(isPlain({ lorem: 'ipsum' })).toBe(true);
        expect(isPlain(new Object())).toBe(true); // eslint-disable-line no-new-object
    });

    test('returns false if value is an object created with constructor function', () => {
        function Noop() {}
        Noop.prototype.useless = function () {};
        const noop = new Noop();

        expect(isPlain(noop)).toBe(false);
    });

    test('returns false if value is not an object', () => {
        expect(isPlain(VOID_0)).toBe(false);
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
