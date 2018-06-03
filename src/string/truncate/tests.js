import truncate from '.';

describe('string/truncate()', () => {
    const string = 'lorem ipsum dolor sit amet';

    test('limits number of chars', () => {
        expect(truncate(string, 10).length).toBeLessThan(11);
        expect(truncate(string, 10)).toBe('lorem i...');

        expect(truncate(string, 14).length).toBeLessThan(15);
        expect(truncate(string, 14)).toBe('lorem ipsum...');
    });

    test('does not crop string if length is less than limit', () => {
        expect(truncate(string, 100)).toBe('lorem ipsum dolor sit amet');
    });

    test('appends string param', () => {
        const truncated = truncate(string, 10, '--');

        expect(truncated.length).toBeLessThan(11);
        expect(truncated).toBe('lorem ip--');
    });

    test('allows cropping at full words', () => {
        expect(truncate(string, 10, '*', true).length).toBeLessThan(11);
        expect(truncate(string, 10, '*', true)).toBe('lorem*');

        expect(truncate(string, 14, null, true).length).toBeLessThan(15);
        expect(truncate(string, 14, null, true)).toBe('lorem ipsum...');
    });
});
