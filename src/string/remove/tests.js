import remove from '.';

describe('string/remove()', () => {
    test('Removes a substring from a string', () => {
        var hello = 'Hello, World!';

        expect(remove(hello, 0, 2)).toBe('llo, World!');
        expect(remove(hello, 0, 100)).toBe('');
        expect(remove(hello, 0, hello.length)).toBe('');
        expect(remove(hello, 90, 100)).toBe('Hello, World!');
    });

    test('treats undefined index as zero', () => {
        var hello = 'Hello, World!';

        expect(remove(hello)).toBe(hello);
        expect(remove(hello, void 0)).toBe(hello);
        expect(remove(hello, void 0, void 0)).toBe(hello);
        expect(remove(hello, null)).toBe(hello);
        expect(remove(hello, null, null)).toBe(hello);
    });

    test('Accepts negative indexes', () => {
        var hello = 'Hello, World!';

        expect(remove(hello, 0, -3)).toBe('ld!');
        expect(remove(hello, 5, -1)).toBe('Hello!');
        expect(remove(hello, 2, -2)).toBe('Hed!');
        expect(remove(hello, -2, -1)).toBe('Hello, Worl!');
        expect(remove(hello, -100, -90)).toBe('Hello, World!');
    });
});
