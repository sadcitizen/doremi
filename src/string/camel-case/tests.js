import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import camelCase from '.';

describe('string/camelCase()', () => {
    test('converts string to camel case', () => {
        expect(camelCase('foo')).toBe('foo');
        expect(camelCase('Foo')).toBe('foo');
        expect(camelCase('FOO')).toBe('foo');
        expect(camelCase('FooBar')).toBe('fooBar');
        expect(camelCase('foo bar')).toBe('fooBar');
        expect(camelCase('Foo Bar Qux')).toBe('fooBarQux');
        expect(camelCase('-FOO-BAR-QUX-')).toBe('fooBarQux');
        expect(camelCase('__FOO__BAR__QUX__')).toBe('fooBarQux');
        expect(camelCase('Foo bar qux')).toBe('fooBarQux');
        expect(camelCase('fooBarQux123')).toBe('fooBarQux123');
        expect(camelCase('123foo123Bar123Qux123')).toBe('123Foo123Bar123Qux123');
        expect(camelCase('foo bar qux 123')).toBe('fooBarQux123');
        expect(camelCase('/foo/bar/qux/')).toBe('fooBarQux');
        expect(camelCase('\\foo\\bar\\qux\\')).toBe('fooBarQux');
        expect(camelCase('XMLHttpRequest')).toBe('xmlHttpRequest');
        expect(camelCase('HTML5')).toBe('html5');
        expect(camelCase('foo!@#$%^&*()bar')).toBe('fooBar');
    });

    test('returns empty string for non alphanumeric characters', () => {
        expect(camelCase('***')).toBe('');
        expect(camelCase('###')).toBe('');
        expect(camelCase('---')).toBe('');
        expect(camelCase('___')).toBe('');
    });

    test('throws type error if the given value is not a string', () => {
        expect(() => camelCase(123456)).toThrow(INVALID_STRING_ARGUMENT);
    });
});
