import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import camelCase from '.';

describe('string/camelCase()', () => {
    test('converts string to camel case', () => {
        const result = 'fooBarQux123';

        expect(camelCase('foo bar qux 123')).toBe(result);
        expect(camelCase('Foo Bar Qux 123')).toBe(result);
        expect(camelCase('FOO BAR QUX 123')).toBe(result);
        expect(camelCase('-foo-bar-qux-123-')).toBe(result);
        expect(camelCase('_foo_bar_qux_123_')).toBe(result);
        expect(camelCase('#foo#bar#qux#123')).toBe(result);
        expect(camelCase('foo!@#$%^&*()bar qux123')).toBe(result);
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
