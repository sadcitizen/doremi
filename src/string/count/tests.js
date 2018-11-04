import { INVALID_STRINGS } from '../../constants/errors';
import count from '.';

describe('string/count()', () => {
    test('finds a substring', () => {
        expect(count('Hello, World!', 'l')).toBe(3);
        expect(count('Hello, World!', 'll')).toBe(1);
    });

    test('do not find a substring', () => {
        expect(count('Hello, World!', 'world')).toBe(0);
        expect(count('Hello, World!', '! ')).toBe(0);
    });

    test('returns zeros if strings are empty', () => {
        expect(count('', 'a')).toBe(0);
        expect(count('abc', '')).toBe(0);
    });

    test('throws type error if the given value is not a string', () => {
        expect(() => count(123456, '1')).toThrow(INVALID_STRINGS);
        expect(() => count('123456', 1)).toThrow(INVALID_STRINGS);
    });
});
