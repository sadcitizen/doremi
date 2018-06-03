import reverse from '.';

describe('string/reverse()', () => {
    test('reverses a substring', () => {
        expect(reverse('Hello, World!')).toBe('!dlroW ,olleH');
        expect(reverse('')).toBe('');
        expect(reverse(12345)).toBe('54321');
    });
});
