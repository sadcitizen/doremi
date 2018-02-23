import isValid from '.';

describe('date/isValid()', () => {
    test('returns true if value is a valid date', () => {
        expect(isValid(new Date())).toBe(true);
        expect(isValid(new Date(2014, 11, 1))).toBe(true);
        expect(isValid(new Date([2014, 11, 1]))).toBe(true);
    });

    test('returns true if value is not a valid date', () => {
        expect(isValid(new Date('date'))).toBe(false);
        expect(isValid(new Date(/\s+/))).toBe(false);
    });
});
