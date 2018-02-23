import or from '.';

describe('logic/or()', () => {
    test('returns true if at least one condition is truthy', () => {
        expect(or(true)).toBe(true);
        expect(or(true, false)).toBe(true);
        expect(or(true, false, true)).toBe(true);
        expect(or(true, false, true, true)).toBe(true);
        expect(or(true, false, true, true, false)).toBe(true);
        expect(or(true, false, true, false, true, true)).toBe(true);
    });

    test('returns false if all conditions is falsy', () => {
        expect(or(false)).toBe(false);
        expect(or(false, false)).toBe(false);
        expect(or(false, false, false)).toBe(false);
        expect(or(false, false, false, false)).toBe(false);
        expect(or(false, false, false, false, false)).toBe(false);
        expect(or(false, false, false, false, false, false)).toBe(false);
    });

    test('returns false if conditions is empty', () => {
        expect(or()).toBe(false);
    });
});
