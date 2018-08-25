import { VOID_0 } from '../../internal/constants';
import isFunction from '.';

describe('func/isFunction()', () => {
    test('returns true if the value is a function', () => {
        const noop = () => {};

        expect(isFunction(() => {})).toBe(true);
        expect(isFunction(Math.abs)).toBe(true);
        expect(isFunction(noop)).toBe(true);
    });

    test('returns false if the value is not a function', () => {
        expect(isFunction(arguments)).toBe(false);
        expect(isFunction(true)).toBe(false);
        expect(isFunction(VOID_0)).toBe(false);
        expect(isFunction(null)).toBe(false);
        expect(isFunction(NaN)).toBe(false);
        expect(isFunction(42)).toBe(false);
        expect(isFunction('')).toBe(false);
        expect(isFunction([])).toBe(false);
        expect(isFunction({})).toBe(false);
        expect(isFunction(new Date())).toBe(false);
        expect(isFunction(/\s+/ig)).toBe(false);
    });
});
