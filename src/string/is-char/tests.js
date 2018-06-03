import { VOID_0 } from '../../internal/constants';
import isChar from '.';

describe('string/isChar()', () => {
    test('returns false if value is a char', () => {
        expect(isChar('a')).toBe(true);
        expect(isChar(String(4))).toBe(true);
        expect(isChar(new String(2))).toBe(true); // eslint-disable-line no-new-wrappers
    });

    test('returns false if value is not char', () => {
        expect(isChar(VOID_0)).toBe(false);
        expect(isChar(null)).toBe(false);
        expect(isChar(NaN)).toBe(false);
        expect(isChar(true)).toBe(false);
        expect(isChar(42)).toBe(false);
        expect(isChar('')).toBe(false);
        expect(isChar('hello')).toBe(false);
        expect(isChar([])).toBe(false);
        expect(isChar({})).toBe(false);
        expect(isChar(new Date())).toBe(false);
        expect(isChar(/\s+/ig)).toBe(false);
    });
});
