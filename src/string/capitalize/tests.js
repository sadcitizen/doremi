import capitalize from '.';

describe('string/capitalize()', () => {
    test('Capitalizes a string', () => {
        expect(capitalize('lorem ipsum')).toBe('Lorem ipsum');
    });

    test('Changes only first letter of a string', () => {
        expect(capitalize('lorem IPSUM')).toBe('Lorem IPSUM');
    });

    test('works with empty string', () => {
        expect(capitalize('')).toBe('');
        expect(capitalize()).toBe('Undefined');
        expect(capitalize(void 0)).toBe('Undefined');
        expect(capitalize(null)).toBe('Null');
    });
});
