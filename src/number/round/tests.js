import round from '.';

describe('number/round()', () => {
    test('rounds down value', () => {
        expect(round(42.4)).toBe(42);
        expect(round(42.5)).toBe(43);
        expect(round(42.6)).toBe(43);
        expect(round(0.4)).toBe(0);
        expect(round(0.5)).toBe(1);
        expect(round(0.6)).toBe(1);
    });

    test('works with negative values', () => {
        expect(round(-42.4)).toBe(-42);
        expect(round(-42.5)).toBe(-42);
        expect(round(-42.6)).toBe(-43);
        expect(round(-0.4)).toBe(0);
        expect(round(-0.5)).toBe(0);
        expect(round(-0.6)).toBe(-1);
    });

    test('allows custom precision', function () {
        expect(round(5.4321, 3)).toBe(5.432);
        expect(round(5.4326, 3)).toBe(5.433);

        expect(round(5.4321, 2)).toBe(5.43);
        expect(round(5.4361, 2)).toBe(5.44);

        expect(round(5.4321, 1)).toBe(5.4);
        expect(round(5.4621, 1)).toBe(5.5);

        expect(round(5.4321, 0)).toBe(5);
        expect(round(5.6321, 0)).toBe(6);

        expect(round(-5.4321, 3)).toBe(-5.432);
        expect(round(-5.4326, 3)).toBe(-5.433);

        expect(round(-5.4321, 2)).toBe(-5.43);
        expect(round(-5.4361, 2)).toBe(-5.44);

        expect(round(-5.4321, 1)).toBe(-5.4);
        expect(round(-5.4621, 1)).toBe(-5.5);

        expect(round(-5.4321, 0)).toBe(-5);
        expect(round(-5.6321, 0)).toBe(-6);
    });

    test('allows custom negative precision', () => {
        expect(round(54321, -3)).toBe(54000);
        expect(round(54621, -3)).toBe(55000);

        expect(round(54321, -2)).toBe(54300);
        expect(round(54361, -2)).toBe(54400);

        expect(round(54321, -1)).toBe(54320);
        expect(round(54326, -1)).toBe(54330);

        expect(round(-54321, -3)).toBe(-54000);
        expect(round(-54621, -3)).toBe(-55000);

        expect(round(-54321, -2)).toBe(-54300);
        expect(round(-54361, -2)).toBe(-54400);

        expect(round(-54321, -1)).toBe(-54320);
        expect(round(-54326, -1)).toBe(-54330);
    });

    test('returns NaN for non-numeric value', () => {
        expect(round('')).toEqual(NaN);
        expect(round('42')).toEqual(NaN);
        expect(round('42.42')).toEqual(NaN);
        expect(round(void 0)).toEqual(NaN);
        expect(round(null)).toEqual(NaN);
        expect(round({})).toEqual(NaN);
        expect(round([])).toEqual(NaN);
        expect(round(true)).toEqual(NaN);
    });
});
