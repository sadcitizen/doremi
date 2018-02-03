import clean from '.';

describe('string/clean()', () => {
    test('Removes all spaces', () => {
        expect(clean('           Hello,      World!             ')).toBe('Hello, World!');
        expect(clean('                        ')).toBe('');
    });

    test('Removes all whitespace', () => {
        expect(clean('\n Hello,   \t   World!        \r     ')).toBe('Hello, World!');
        expect(clean('\0 \b \t \n \v \f \r')).toBe('');
    });
});
