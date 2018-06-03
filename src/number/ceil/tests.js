import { VOID_0 } from '../../internal/constants';
import ceil from '.';

describe('number/ceil()', () => {
    test('rounds up value', () => {
        expect(ceil(42.42)).toBe(43);
        expect(ceil(0.42)).toBe(1);
    });

    test('works with negative values', () => {
        expect(ceil(-42.42)).toBe(-42);
        expect(ceil(-0.42)).toBe(0);
    });

    test('allows custom precision', () => {
        expect(ceil(5.4321, 3)).toBe(5.433);
        expect(ceil(5.4321, 2)).toBe(5.44);
        expect(ceil(5.4321, 1)).toBe(5.5);
        expect(ceil(5.4321, 0)).toBe(6);

        expect(ceil(-5.4321, 3)).toBe(-5.432);
        expect(ceil(-5.4321, 2)).toBe(-5.43);
        expect(ceil(-5.4321, 1)).toBe(-5.4);
        expect(ceil(-5.4321, 0)).toBe(-5);
    });

    test('allows custom negative precision', () => {
        expect(ceil(54321, -3)).toBe(55000);
        expect(ceil(54321, -2)).toBe(54400);
        expect(ceil(54321, -1)).toBe(54330);

        expect(ceil(-54321, -3)).toBe(-54000);
        expect(ceil(-54321, -2)).toBe(-54300);
        expect(ceil(-54321, -1)).toBe(-54320);
    });

    test('returns NaN for non-numeric value', () => {
        expect(ceil('')).toEqual(NaN);
        expect(ceil('42')).toEqual(NaN);
        expect(ceil('42.42')).toEqual(NaN);
        expect(ceil(VOID_0)).toEqual(NaN);
        expect(ceil(null)).toEqual(NaN);
        expect(ceil({})).toEqual(NaN);
        expect(ceil([])).toEqual(NaN);
        expect(ceil(true)).toEqual(NaN);
    });
});
