import VOID_0 from '../../constants/void-0';
import isDate from '.';

describe('common/isDate()', () => {
    test('returns true if the value is a date', () => {
        expect(isDate(new Date())).toBe(true);
        expect(isDate(new Date('Date'))).toBe(true);
        expect(isDate(new Date(2014, 11, 1))).toBe(true);
    });

    test('returns false if the value is not a date', () => {
        expect(isDate(arguments)).toBe(false);
        expect(isDate(VOID_0)).toBe(false);
        expect(isDate(true)).toBe(false);
        expect(isDate(null)).toBe(false);
        expect(isDate(NaN)).toBe(false);
        expect(isDate(42)).toBe(false);
        expect(isDate('')).toBe(false);
        expect(isDate([])).toBe(false);
        expect(isDate({})).toBe(false);
        expect(isDate(/\s+/ig)).toBe(false);
    });
});
