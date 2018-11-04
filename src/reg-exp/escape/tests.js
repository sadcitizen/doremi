/* eslint-disable no-useless-escape */
import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import escape from '.';

describe('regExp/escape()', () => {
    test('returns the escaped string', () => {
        expect(escape('\\s')).toBe('\\\\s');
        expect(escape('[')).toBe('\\[');
        expect(escape(']')).toBe('\\]');
        expect(escape('{')).toBe('\\{');
        expect(escape('}')).toBe('\\}');
        expect(escape('(')).toBe('\\(');
        expect(escape(')')).toBe('\\)');
        expect(escape('=')).toBe('\\=');
        expect(escape(':')).toBe('\\:');
        expect(escape('/')).toBe('\\/');
        expect(escape('*')).toBe('\\*');
        expect(escape('+')).toBe('\\+');
        expect(escape('?')).toBe('\\?');
        expect(escape('!')).toBe('\\!');
        expect(escape('^')).toBe('\\^');
        expect(escape('$')).toBe('\\$');
        expect(escape('|')).toBe('\\|');
        expect(escape('.')).toBe('\\.');
        expect(escape(',')).toBe('\\,');

        expect(escape('(hello)?world')).toBe('\\(hello\\)\\?world');
        expect(escape('100$')).toBe('100\\$');
        expect(escape('2+2=4')).toBe('2\\+2\\=4');
    });

    test('throws type error if the given value is not a string', () => {
        expect(() => escape(123456)).toThrow(INVALID_STRING_ARGUMENT);
    });
});
/* eslint-enable no-useless-escape */
