import { VOID_0 } from '../../internal/constants';
import decapitalize from '.';

describe('string/decapitalize()', () => {
    test('decapitalizes a string', () => {
        expect(decapitalize('Lorem ipsum')).toBe('lorem ipsum');
    });

    test('changes only first letter of a string', () => {
        expect(decapitalize('Lorem IPSUM')).toBe('lorem IPSUM');
    });

    test('works with empty strings', () => {
        expect(decapitalize('')).toBe('');
        expect(decapitalize()).toBe('undefined');
        expect(decapitalize(VOID_0)).toBe('undefined');
        expect(decapitalize(null)).toBe('null');
    });
});
