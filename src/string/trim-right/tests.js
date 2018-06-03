import trimRight from '.';

describe('string/trimRight()', () => {
    test('removes trailing whitespaces', () => {
        expect(trimRight(' Hello, World!             ')).toBe(' Hello, World!');
        expect(trimRight('        ')).toBe('');
        expect(trimRight('\tHello,   \t   World!        \r     ')).toBe('\tHello,   \t   World!');
        expect(trimRight('Hello, World!\v \f \r')).toBe('Hello, World!');
    });

    test('removes trailing given characters', () => {
        expect(trimRight('/Hello, World! */', '/', ' ', '*')).toBe('/Hello, World!');
        expect(trimRight('Hello, World!****~~~', '*~')).toBe('Hello, World!');
    });
});
