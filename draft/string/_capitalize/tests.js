import { VOID_0 } from '../../internal/constants';
import capitalize from '.';

describe('string/capitalize()', () => {
    test('capitalizes a string', () => {
        expect(capitalize('lorem ipsum')).toBe('Lorem ipsum');
    });

    test('changes only first letter of a string', () => {
        expect(capitalize('lorem IPSUM')).toBe('Lorem IPSUM');
    });

    test('works with empty string', () => {
        expect(capitalize('')).toBe('');
        expect(capitalize()).toBe('Undefined');
        expect(capitalize(VOID_0)).toBe('Undefined');
        expect(capitalize(null)).toBe('Null');
    });
});
