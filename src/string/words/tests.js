import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import words from '.';

describe('string/words()', () => {
    test('splits string into array of words', () => {
        expect(words('foo')).toEqual(['foo']);
        expect(words('Foo')).toEqual(['Foo']);
        expect(words('FOO')).toEqual(['FOO']);
        expect(words('FooBar')).toEqual(['Foo', 'Bar']);
        expect(words('foo bar')).toEqual(['foo', 'bar']);
        expect(words('Foo Bar Qux')).toEqual(['Foo', 'Bar', 'Qux']);
        expect(words('-FOO-BAR-QUX-')).toEqual(['FOO', 'BAR', 'QUX']);
        expect(words('__FOO__BAR__QUX__')).toEqual(['FOO', 'BAR', 'QUX']);
        expect(words('Foo bar qux')).toEqual(['Foo', 'bar', 'qux']);
        expect(words('fooBarQux123')).toEqual(['foo', 'Bar', 'Qux', '123']);
        expect(words('123foo123Bar123Qux123')).toEqual(['123', 'foo', '123', 'Bar', '123', 'Qux', '123']);
        expect(words('foo bar qux 123')).toEqual(['foo', 'bar', 'qux', '123']);
        expect(words('/foo/bar/qux/')).toEqual(['foo', 'bar', 'qux']);
        expect(words('\\foo\\bar\\qux\\')).toEqual(['foo', 'bar', 'qux']);
        expect(words('XMLHttpRequest')).toEqual(['XML', 'Http', 'Request']);
        expect(words('HTML5')).toEqual(['HTML', '5']);
        expect(words('foo!@#$%^&*()bar')).toEqual(['foo', 'bar']);
    });

    test('returns empty string for non alphanumeric characters', () => {
        expect(words('***')).toEqual(['']);
        expect(words('###')).toEqual(['']);
        expect(words('---')).toEqual(['']);
        expect(words('___')).toEqual(['']);
    });

    test('throws type error if the given value is not a string', () => {
        expect(() => words(123456)).toThrow(INVALID_STRING_ARGUMENT);
    });
});
