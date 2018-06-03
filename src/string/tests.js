import string, { camelize, capitalize, chop, chopRight, clean, count, decapitalize, escape, extract, insert, isBlank, isChar, isEmpty, isString, join, lines, pad, padLeft, padRight, remove, repeat, reverse, swap, template, trim, trimLeft, trimRight, truncate, unescape } from '.';

describe('doremi/string', () => {
    test('imports doremi/string as object', () => {
        expect(string).toEqual(expect.any(Object));
    });

    test('doremi/string has correct properties', () => {
        expect(string).toHaveProperty('camelize', camelize);
        expect(string).toHaveProperty('capitalize', capitalize);
        expect(string).toHaveProperty('chop', chop);
        expect(string).toHaveProperty('chopRight', chopRight);
        expect(string).toHaveProperty('clean', clean);
        expect(string).toHaveProperty('count', count);
        expect(string).toHaveProperty('decapitalize', decapitalize);
        expect(string).toHaveProperty('escape', escape);
        expect(string).toHaveProperty('extract', extract);
        expect(string).toHaveProperty('insert', insert);
        expect(string).toHaveProperty('isBlank', isBlank);
        expect(string).toHaveProperty('isChar', isChar);
        expect(string).toHaveProperty('isEmpty', isEmpty);
        expect(string).toHaveProperty('isString', isString);
        expect(string).toHaveProperty('join', join);
        expect(string).toHaveProperty('lines', lines);
        expect(string).toHaveProperty('pad', pad);
        expect(string).toHaveProperty('padLeft', padLeft);
        expect(string).toHaveProperty('padRight', padRight);
        expect(string).toHaveProperty('remove', remove);
        expect(string).toHaveProperty('repeat', repeat);
        expect(string).toHaveProperty('reverse', reverse);
        expect(string).toHaveProperty('swap', swap);
        expect(string).toHaveProperty('template', template);
        expect(string).toHaveProperty('trim', trim);
        expect(string).toHaveProperty('trimLeft', trimLeft);
        expect(string).toHaveProperty('trimRight', trimRight);
        expect(string).toHaveProperty('truncate', truncate);
        expect(string).toHaveProperty('unescape', unescape);
    });
});
