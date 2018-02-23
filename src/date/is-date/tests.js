import isDate from '.';

describe('date/isDate()', () => {
    test('returns true if value is a date', () => {
        expect(isDate(new Date())).toBe(true);
        expect(isDate(new Date('Date'))).toBe(true);
        expect(isDate(new Date(2014, 11, 1))).toBe(true);
    });

    test('returns false if value is not a date', () => {
        expect(isDate(arguments)).toBe(false);
        expect(isDate(void 0)).toBe(false);
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
