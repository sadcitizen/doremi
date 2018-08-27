import equals from '.';

describe('number/equals()', () => {
    test('returns true if the numbers are equal', () => {
        expect(equals(Math.E, Math.E)).toBe(true);
        expect(equals(Math.E, 2.7, 0.1)).toBe(true);
        expect(equals(Math.LN2, 0.69, 0.01)).toBe(true);
        expect(equals(Math.LN10, 2.302, 0.001)).toBe(true);
        expect(equals(Math.PI, 3.1415, 0.0001)).toBe(true);
    });

    test('returns false if the numbers are not equal', () => {
        expect(equals(Math.E, 2.7, 0.01)).toBe(false);
        expect(equals(Math.LN2, 0.69, 0.001)).toBe(false);
        expect(equals(Math.LN10, 2.302, 0.0001)).toBe(false);
        expect(equals(Math.PI, 3.1415, 0.00001)).toBe(false);
    });
});
