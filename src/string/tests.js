import string, {
    camelCase,
    capitalize,
    chop,
    chopRight,
    compact,
    count,
    isBlank,
    kebabCase,
    pad,
    padLeft,
    padRight,
    repeat,
    reverse,
    snakeCase,
    swapCase,
    trim,
    trimLeft,
    trimRight,
    truncate,
    words
} from '.';

describe('doremi/string', () => {
    test('imports doremi/string as object', () => {
        expect(string).toEqual(expect.any(Object));
    });

    test('doremi/string has correct properties', () => {
        expect(string).toHaveProperty('camelCase', camelCase);
        expect(string).toHaveProperty('capitalize', capitalize);
        expect(string).toHaveProperty('chop', chop);
        expect(string).toHaveProperty('chopRight', chopRight);
        expect(string).toHaveProperty('compact', compact);
        expect(string).toHaveProperty('count', count);
        expect(string).toHaveProperty('isBlank', isBlank);
        expect(string).toHaveProperty('kebabCase', kebabCase);
        expect(string).toHaveProperty('pad', pad);
        expect(string).toHaveProperty('padLeft', padLeft);
        expect(string).toHaveProperty('padRight', padRight);
        expect(string).toHaveProperty('repeat', repeat);
        expect(string).toHaveProperty('reverse', reverse);
        expect(string).toHaveProperty('snakeCase', snakeCase);
        expect(string).toHaveProperty('swapCase', swapCase);
        expect(string).toHaveProperty('trim', trim);
        expect(string).toHaveProperty('trimLeft', trimLeft);
        expect(string).toHaveProperty('trimRight', trimRight);
        expect(string).toHaveProperty('truncate', truncate);
        expect(string).toHaveProperty('words', words);
    });
});
