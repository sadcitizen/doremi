import VOID_0 from '../../constants/void-0';
import isNumber from '.';

describe('common/isNumber()', () => {
    test('returns false if the value is an number', () => {
        expect(isNumber(42)).toBe(true);
        expect(isNumber(Number('42'))).toBe(true);
        expect(isNumber(new Number('42'))).toBe(true); // eslint-disable-line no-new-wrappers
        expect(isNumber(-42)).toBe(true);
        expect(isNumber(0)).toBe(true);
        expect(isNumber(0xff)).toBe(true);
        expect(isNumber(1e4)).toBe(true);
        expect(isNumber(NaN)).toBe(true);
        expect(isNumber(parseInt('042', 8))).toBe(true);
        expect(isNumber(parseFloat('042'))).toBe(true);
    });

    test('returns false if the value is not numeric', () => {
        expect(isNumber(VOID_0)).toBe(false);
        expect(isNumber(null)).toBe(false);
        expect(isNumber(true)).toBe(false);
        expect(isNumber('')).toBe(false);
        expect(isNumber([])).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber(new Date())).toBe(false);
        expect(isNumber(/\s+/ig)).toBe(false);
    });
});
