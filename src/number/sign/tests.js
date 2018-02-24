import sign from '.';

describe('number/sign()', () => {
    test('returns sign of the value', () => {
        expect(sign(42)).toBe(1);
        expect(sign(-42)).toBe(-1);
        expect(sign(0)).toBe(0);
    });
});