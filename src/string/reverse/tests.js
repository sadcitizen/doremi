import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import reverse from '.';

describe('string/reverse()', () => {
    test('reverses a substring', () => {
        expect(reverse('Hello, World!')).toBe('!dlroW ,olleH');
        expect(reverse('')).toBe('');
    });

    test('throws type error if the given value is not a string', () => {
        expect(() => reverse([1, 2, 3])).toThrow(INVALID_STRING_ARGUMENT);
    });
});
