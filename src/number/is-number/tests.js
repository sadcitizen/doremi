import isNumber from '.';

describe('number/isNumber()', () => {
    test('Return false if value is an number', () => {
        expect(isNumber(42)).toBe(true);
        expect(isNumber(Number('42'))).toBe(true);
        /* jshint -W053 */
        expect(isNumber(new Number('42'))).toBe(true);
        /* jshint +W053 */
        expect(isNumber(-42)).toBe(true);
        expect(isNumber(0)).toBe(true);
    });

    test('Return false if value is not numeric', () => {
        expect(isNumber(void 0)).toBe(false);
        expect(isNumber(null)).toBe(false);
        expect(isNumber(NaN)).toBe(false);
        expect(isNumber(true)).toBe(false);
        expect(isNumber('')).toBe(false);
        expect(isNumber([])).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber(new Date())).toBe(false);
        expect(isNumber(/\s+/ig)).toBe(false);
    });
});
