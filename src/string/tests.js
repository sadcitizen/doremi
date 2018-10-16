import string, {
    camelCase,
    kebabCase,
    repeat,
    reverse,
    snakeCase,
    words
} from '.';

describe('doremi/string', () => {
    test('imports doremi/string as object', () => {
        expect(string).toEqual(expect.any(Object));
    });

    test('doremi/string has correct properties', () => {
        expect(string).toHaveProperty('camelCase', camelCase);
        expect(string).toHaveProperty('kebabCase', kebabCase);
        expect(string).toHaveProperty('repeat', repeat);
        expect(string).toHaveProperty('reverse', reverse);
        expect(string).toHaveProperty('snakeCase', snakeCase);
        expect(string).toHaveProperty('words', words);
    });
});
