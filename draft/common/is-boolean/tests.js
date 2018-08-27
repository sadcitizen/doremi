import { VOID_0 } from '../../internal/constants';
import isBoolean from '.';

describe('common/isBoolean()', () => {
    test('returns true if the value is a boolean', () => {
        expect(isBoolean(true)).toBe(true);
        expect(isBoolean(false)).toBe(true);
        expect(isBoolean(Boolean(0))).toBe(true);
        expect(isBoolean(Boolean(1))).toBe(true);
        expect(isBoolean(new Boolean(0))).toBe(true); // eslint-disable-line no-new-wrappers
        expect(isBoolean(new Boolean(1))).toBe(true); // eslint-disable-line no-new-wrappers
    });

    test('returns false if the value is not a boolean', () => {
        expect(isBoolean(arguments)).toBe(false);
        expect(isBoolean(VOID_0)).toBe(false);
        expect(isBoolean(null)).toBe(false);
        expect(isBoolean(NaN)).toBe(false);
        expect(isBoolean(42)).toBe(false);
        expect(isBoolean('')).toBe(false);
        expect(isBoolean([])).toBe(false);
        expect(isBoolean({})).toBe(false);
        expect(isBoolean(/\s+/ig)).toBe(false);
        expect(isBoolean(new Date())).toBe(false);
    });
});
