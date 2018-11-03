import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import isBlank from '.';

describe('string/isBlank()', () => {
    test('returns true for a blank string', () => {
        expect(isBlank('')).toBe(true);
        expect(isBlank('       \t \n   ')).toBe(true);
    });

    test('returns false for other strings', () => {
        expect(isBlank('hello')).toBe(false);
        expect(isBlank('apple, orange')).toBe(false);
        expect(isBlank(JSON.stringify({ a: [1, 2, 3, 4], b: { c: 'd' } }))).toBe(false);
    });

    test('throws type error if the given value is not a string', () => {
        expect(() => isBlank(123456)).toThrow(INVALID_STRING_ARGUMENT);
    });
});
