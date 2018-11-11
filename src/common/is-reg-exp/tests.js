import VOID_0 from '../../constants/void-0';
import isRegExp from '.';

describe('common/isRegExp()', () => {
    test('returns true if the value is a regular expression', () => {
        expect(isRegExp(/[a-zA-Z0-9]/ig)).toBe(true);
    });

    test('returns false if the value is not a regular expression', () => {
        expect(isRegExp(VOID_0)).toBe(false);
        expect(isRegExp(null)).toBe(false);
        expect(isRegExp(NaN)).toBe(false);
        expect(isRegExp(true)).toBe(false);
        expect(isRegExp(42)).toBe(false);
        expect(isRegExp([])).toBe(false);
        expect(isRegExp({})).toBe(false);
        expect(isRegExp(new Date())).toBe(false);
        expect(isRegExp('')).toBe(false);
        expect(isRegExp(String(42))).toBe(false);
        expect(isRegExp('[a-zA-Z0-9]/ig')).toBe(false);
    });
});
