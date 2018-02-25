import isDefined from '.';

describe('common/isDefined()', () => {
    test('returns false if value is undefined', () => {
        expect(isDefined()).toBe(false);
        expect(isDefined(undefined)).toBe(false);
    });

    test('returns false if value is null', () => {
        expect(isDefined(null)).toBe(false);
    });

    test('returns true for other values', () => {
        expect(isDefined(0)).toBe(true);
        expect(isDefined(42)).toBe(true);
        expect(isDefined(-42)).toBe(true);
        expect(isDefined(NaN)).toBe(true);
        expect(isDefined(Infinity)).toBe(true);
        expect(isDefined(-Infinity)).toBe(true);
        expect(isDefined(true)).toBe(true);
        expect(isDefined(false)).toBe(true);
        expect(isDefined('')).toBe(true);
        expect(isDefined('hello')).toBe(true);
        expect(isDefined([])).toBe(true);
        expect(isDefined([1, 2, 3])).toBe(true);
        expect(isDefined({})).toBe(true);
        expect(isDefined({a: 'b', c: 'd'})).toBe(true);
    });
});
