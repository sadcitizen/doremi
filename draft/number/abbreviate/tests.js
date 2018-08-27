import { VOID_0 } from '../../internal/constants';
import abbreviate from '.';

describe('number/abbreviate()', () => {
    test('returns numbers', () => {
        expect(abbreviate(1)).toBe('1');
        expect(abbreviate(12)).toBe('12');
        expect(abbreviate(123)).toBe('123');
    });

    test('abbreviates numbers', () => {
        expect(abbreviate(1234)).toBe('1.23k');
        expect(abbreviate(12345)).toBe('12.34k');
        expect(abbreviate(123456)).toBe('123.45k');
        expect(abbreviate(1234567)).toBe('1.23M');
        expect(abbreviate(12345678)).toBe('12.34M');
        expect(abbreviate(123456789)).toBe('123.45M');
        expect(abbreviate(1234567890)).toBe('1.23G');
        expect(abbreviate(12345678901)).toBe('12.34G');
        expect(abbreviate(123456789012)).toBe('123.45G');
    });

    test('abbreviates negative numbers', () => {
        expect(abbreviate(-1234)).toBe('-1.23k');
        expect(abbreviate(-12345)).toBe('-12.34k');
        expect(abbreviate(-123456)).toBe('-123.45k');
        expect(abbreviate(-1234567)).toBe('-1.23M');
        expect(abbreviate(-12345678)).toBe('-12.34M');
        expect(abbreviate(-123456789)).toBe('-123.45M');
        expect(abbreviate(-1234567890)).toBe('-1.23G');
        expect(abbreviate(-12345678901)).toBe('-12.34G');
        expect(abbreviate(-123456789012)).toBe('-123.45G');
    });

    test('allows custom precision', () => {
        expect(abbreviate(1234567, { precision: 1 })).toBe('1.2M');
        expect(abbreviate(1234567, { precision: 2 })).toBe('1.23M');
        expect(abbreviate(1234567, { precision: 3 })).toBe('1.234M');
        expect(abbreviate(1234567, { precision: 4 })).toBe('1.2345M');
        expect(abbreviate(1234, { precision: 6 })).toBe('1.234000k');
    });

    test('allows custom dictionary', () => {
        const options = {
            precision: 2,
            dictionary: { kilo: ' кГц', mega: ' МГц', giga: ' ГГц' }
        };

        expect(abbreviate(1234, options)).toBe('1.23 кГц');
        expect(abbreviate(12345, options)).toBe('12.34 кГц');
        expect(abbreviate(123456, options)).toBe('123.45 кГц');
        expect(abbreviate(1234567, options)).toBe('1.23 МГц');
        expect(abbreviate(12345678, options)).toBe('12.34 МГц');
        expect(abbreviate(123456789, options)).toBe('123.45 МГц');
        expect(abbreviate(1234567890, options)).toBe('1.23 ГГц');
        expect(abbreviate(12345678901, options)).toBe('12.34 ГГц');
        expect(abbreviate(123456789012, options)).toBe('123.45 ГГц');
    });

    test('returns empty string for non-numeric value', () => {
        expect(abbreviate('')).toBe('');
        expect(abbreviate('42')).toBe('');
        expect(abbreviate('42.42')).toBe('');
        expect(abbreviate(VOID_0)).toBe('');
        expect(abbreviate(null)).toBe('');
        expect(abbreviate({})).toBe('');
        expect(abbreviate([])).toBe('');
        expect(abbreviate(true)).toBe('');
    });
});
