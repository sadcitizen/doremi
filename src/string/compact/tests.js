import compact from '.';

describe('string/compact()', () => {
    test('removes all spaces', () => {
        expect(compact('           Hello,      World!             ')).toBe('Hello, World!');
        expect(compact('                        ')).toBe('');
    });

    test('removes all whitespace', () => {
        expect(compact('\n Hello,   \t   World!        \r     ')).toBe('Hello, World!');
        expect(compact('\0 \b \t \n \v \f \r')).toBe('');
    });
});
