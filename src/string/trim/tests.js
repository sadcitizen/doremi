import trim from '.';

describe('string/trim()', () => {
    test('Removes leading and trailing whitespaces', () => {
        expect(trim('           Hello, World!             ')).toBe('Hello, World!');
        expect(trim('                        ')).toBe('');
        expect(trim('\n Hello,   \t   World!        \r     ')).toBe('Hello,   \t   World!');
        expect(trim('\0 \b \t \nHello, World!\v \f \r')).toBe('Hello, World!');
    });

    test('Removes leading and trailing given characters', () => {
        expect(trim('/* Hello, World! */', '/', ' ', '*')).toBe('Hello, World!');
        expect(trim('~~~****Hello, World!****~~~', '*~')).toBe('Hello, World!');
    });
});
