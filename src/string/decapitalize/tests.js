import decapitalize from '.';

describe('string/decapitalize()', () => {
    test('Decapitalizes a string', () => {
        expect(decapitalize('Lorem ipsum')).toBe('lorem ipsum');
    });

    test('Changes only first letter of a string', () => {
        expect(decapitalize('Lorem IPSUM')).toBe('lorem IPSUM');
    });

    test('Works with empty strings', () => {
        expect(decapitalize('')).toBe('');
        expect(decapitalize()).toBe('undefined');
        expect(decapitalize(void 0)).toBe('undefined');
        expect(decapitalize(null)).toBe('null');
    });
});
