import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import kebabCase from '.';

describe('string/kebabCase()', () => {
    test('converts string to kebab case', () => {
        expect(kebabCase('foo')).toBe('foo');
        expect(kebabCase('Foo')).toBe('foo');
        expect(kebabCase('FOO')).toBe('foo');
        expect(kebabCase('FooBar')).toBe('foo-bar');
        expect(kebabCase('foo bar')).toBe('foo-bar');
        expect(kebabCase('Foo Bar Qux')).toBe('foo-bar-qux');
        expect(kebabCase('-FOO-BAR-QUX-')).toBe('foo-bar-qux');
        expect(kebabCase('__FOO__BAR__QUX__')).toBe('foo-bar-qux');
        expect(kebabCase('Foo bar qux')).toBe('foo-bar-qux');
        expect(kebabCase('fooBarQux123')).toBe('foo-bar-qux-123');
        expect(kebabCase('123foo123Bar123Qux123')).toBe('123-foo-123-bar-123-qux-123');
        expect(kebabCase('foo bar qux 123')).toBe('foo-bar-qux-123');
        expect(kebabCase('/foo/bar/qux/')).toBe('foo-bar-qux');
        expect(kebabCase('\\foo\\bar\\qux\\')).toBe('foo-bar-qux');
        expect(kebabCase('XMLHttpRequest')).toBe('xml-http-request');
        expect(kebabCase('HTML5')).toBe('html-5');
        expect(kebabCase('foo!@#$%^&*()bar')).toBe('foo-bar');
    });

    test('returns empty string for non alphanumeric characters', () => {
        expect(kebabCase('***')).toBe('');
        expect(kebabCase('###')).toBe('');
        expect(kebabCase('---')).toBe('');
        expect(kebabCase('___')).toBe('');
    });

    test('throws type error if the given value is not a string', () => {
        expect(() => kebabCase(123456)).toThrow(INVALID_STRING_ARGUMENT);
    });
});
