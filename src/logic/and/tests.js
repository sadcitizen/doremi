import and from '.';

describe('logic/and()', () => {
    test('returns true if all conditions is truthy', () => {
        expect(and(true)).toBe(true);
        expect(and(true, true)).toBe(true);
        expect(and(true, true, true)).toBe(true);
        expect(and(true, true, true, true)).toBe(true);
        expect(and(true, true, true, true, true)).toBe(true);
        expect(and(true, true, true, true, true, true)).toBe(true);
    });

    test('returns false if at least one condition is falsy', () => {
        expect(and(false)).toBe(false);
        expect(and(true, false)).toBe(false);
        expect(and(true, false, true)).toBe(false);
        expect(and(true, false, true, true)).toBe(false);
        expect(and(true, false, true, true, false)).toBe(false);
        expect(and(true, false, true, false, true, true)).toBe(false);
    });

    test('returns false if conditions is empty', () => {
        expect(and()).toBe(false);
    });
});
