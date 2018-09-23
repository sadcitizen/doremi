import string, {
    camelCase
} from '.';

describe('doremi/string', () => {
    test('imports doremi/string as object', () => {
        expect(string).toEqual(expect.any(Object));
    });

    test('doremi/string has correct properties', () => {
        expect(string).toHaveProperty('camelCase', camelCase);
    });
});
