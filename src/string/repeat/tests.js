import repeat from '.';

describe('string/repeat()', () => {
    test('Repeats a string', () => {
        expect(repeat('*', 3)).toBe('***');
        expect(repeat(123, 2)).toBe('123123');
        expect(repeat('lorem', 2)).toBe('loremlorem');
        expect(repeat(' ', 5)).toBe('     ');
        expect(repeat(' ', 0)).toBe('');
        expect(repeat('lorem ipsum', 0)).toBe('');
    });

    test('Treat null and undefined as zero', () => {
        expect(repeat('lorem ipsum')).toBe('');
        expect(repeat('lorem ipsum', void 0)).toBe('');
        expect(repeat('lorem ipsum', null)).toBe('');
    });

    test('Treat a str as zero', () => {
        expect(repeat('lorem ipsum', 'null')).toBe('');
        expect(repeat('lorem ipsum', '')).toBe('');
    });

    test('Works with negative counts', () => {
        expect(repeat('*', -3)).toBe('');
        expect(repeat('lorem', -2)).toBe('');
        expect(repeat(' ', -5)).toBe('');
    });
});
