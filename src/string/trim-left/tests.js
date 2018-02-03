import trimLeft from '.';

describe('string/trimLeft()', () => {
    test('Removes leading whitespaces', () => {
        expect(trimLeft('           Hello, World! ')).toBe('Hello, World! ');
        expect(trimLeft('                        ')).toBe('');
        expect(trimLeft('\n Hello,   \t   World!')).toBe('Hello,   \t   World!');
        expect(trimLeft('\0 \b \t \nHello, World!')).toBe('Hello, World!');
    });

    test('Removes leading given characters', () => {
        expect(trimLeft('/* Hello, World!*/', '/', ' ', '*')).toBe('Hello, World!*/');
        expect(trimLeft('~~~****Hello, World!', '*~')).toBe('Hello, World!');
    });
});
