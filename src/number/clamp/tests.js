import clamp from '.';

describe('number/clamp()', () => {
    test('returns maximum if the value is greater than maximum', () => {
        expect(clamp(10, 1, 5)).toBe(5);
        expect(clamp(10000, 1, 5)).toBe(5);
        expect(clamp(Number.MAX_VALUE, 1, 5)).toBe(5);
        expect(clamp(5, -10, 0)).toBe(0);
        expect(clamp(-3, -10, -5)).toBe(-5);
    });

    test('returns minimum if the value is less than minimum', () => {
        expect(clamp(0, 1, 5)).toBe(1);
        expect(clamp(-10000, 1, 5)).toBe(1);
        expect(clamp(Number.MIN_VALUE, 1, 5)).toBe(1);
        expect(clamp(-50, -10, 0)).toBe(-10);
    });

    test('returns the value if it is inside the bounds', () => {
        expect(clamp(-11, -100, -10)).toBe(-11);
        expect(clamp(11, 10, 100)).toBe(11);
        expect(clamp(42, Number.MIN_VALUE, Number.MAX_VALUE)).toBe(42);
    });
});