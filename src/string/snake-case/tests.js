import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import snakeCase from '.';

describe('string/snakeCase()', () => {
    test('converts string to snake case', () => {
        expect(snakeCase('foo')).toBe('foo');
        expect(snakeCase('Foo')).toBe('foo');
        expect(snakeCase('FOO')).toBe('foo');
        expect(snakeCase('FooBar')).toBe('foo_bar');
        expect(snakeCase('foo bar')).toBe('foo_bar');
        expect(snakeCase('Foo Bar Qux')).toBe('foo_bar_qux');
        expect(snakeCase('-FOO-BAR-QUX-')).toBe('foo_bar_qux');
        expect(snakeCase('__FOO__BAR__QUX__')).toBe('foo_bar_qux');
        expect(snakeCase('Foo bar qux')).toBe('foo_bar_qux');
        expect(snakeCase('fooBarQux123')).toBe('foo_bar_qux_123');
        expect(snakeCase('123foo123Bar123Qux123')).toBe('123_foo_123_bar_123_qux_123');
        expect(snakeCase('foo bar qux 123')).toBe('foo_bar_qux_123');
        expect(snakeCase('/foo/bar/qux/')).toBe('foo_bar_qux');
        expect(snakeCase('\\foo\\bar\\qux\\')).toBe('foo_bar_qux');
        expect(snakeCase('XMLHttpRequest')).toBe('xml_http_request');
        expect(snakeCase('HTML5')).toBe('html_5');
        expect(snakeCase('foo!@#$%^&*()bar')).toBe('foo_bar');
    });

    test('returns empty string for non alphanumeric characters', () => {
        expect(snakeCase('***')).toBe('');
        expect(snakeCase('###')).toBe('');
        expect(snakeCase('---')).toBe('');
        expect(snakeCase('___')).toBe('');
    });

    test('throws type error if the given value is not a string', () => {
        expect(() => snakeCase(123456)).toThrow(INVALID_STRING_ARGUMENT);
    });
});
