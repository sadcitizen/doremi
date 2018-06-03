import { VOID_0 } from '../../internal/constants';
import floor from '.';

describe('number/floor()', () => {
    test('rounds down value', () => {
        expect(floor(42.42)).toBe(42);
        expect(floor(0.42)).toBe(0);
    });

    test('works with negative values', () => {
        expect(floor(-42.42)).toBe(-43);
        expect(floor(-0.42)).toBe(-1);
    });

    test('allows custom precision', () => {
        expect(floor(5.4321, 3)).toBe(5.432);
        expect(floor(5.4321, 2)).toBe(5.43);
        expect(floor(5.4321, 1)).toBe(5.4);
        expect(floor(5.4321, 0)).toBe(5);

        expect(floor(-5.4321, 3)).toBe(-5.433);
        expect(floor(-5.4321, 2)).toBe(-5.44);
        expect(floor(-5.4321, 1)).toBe(-5.5);
        expect(floor(-5.4321, 0)).toBe(-6);
    });

    test('allows custom negative precision', () => {
        expect(floor(54321, -3)).toBe(54000);
        expect(floor(54321, -2)).toBe(54300);
        expect(floor(54321, -1)).toBe(54320);

        expect(floor(-54321, -3)).toBe(-55000);
        expect(floor(-54321, -2)).toBe(-54400);
        expect(floor(-54321, -1)).toBe(-54330);
    });

    test('returns NaN for non-numeric value', () => {
        expect(floor('')).toEqual(NaN);
        expect(floor('42')).toEqual(NaN);
        expect(floor('42.42')).toEqual(NaN);
        expect(floor(VOID_0)).toEqual(NaN);
        expect(floor(null)).toEqual(NaN);
        expect(floor({})).toEqual(NaN);
        expect(floor([])).toEqual(NaN);
        expect(floor(true)).toEqual(NaN);
    });
});
