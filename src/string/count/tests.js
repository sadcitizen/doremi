import count from '.';

describe('string/count()', () => {
    test('finds a substring', () => {
        expect(count('Hello, World!', 'l')).toBe(3);
        expect(count('Hello, World!', 'll')).toBe(1);
        expect(count(12345, 1)).toBe(1);
        expect(count(99999, 9)).toBe(5);
        expect(count(99999, 99)).toBe(4);
    });

    test('do not find a substring', () => {
        expect(count('Hello, World!', 'world')).toBe(0);
        expect(count('Hello, World!', '! ')).toBe(0);
    });

    test('works with null, undefined and empty strings', () => {
        expect(count('', 'x')).toBe(0);
        expect(count('', '')).toBe(0);
        expect(count(null, 'x')).toBe(0);
        expect(count(void 0, 'x')).toBe(0);
    });
});
