import { VOID_0 } from '../../internal/constants';
import isObject from '.';

describe('object/isObject()', () => {
    test('returns true if value is an object', () => {
        function Noop() {}
        const noop = new Noop();

        expect(isObject({})).toBe(true);
        expect(isObject({ a: 'b', c: 'd' })).toBe(true);
        expect(isObject(noop)).toBe(true);
        expect(isObject(new Object())).toBe(true); // eslint-disable-line no-new-object
    });

    test('returns false if value is not an object', () => {
        expect(isObject(VOID_0)).toBe(false);
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
