import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import VOID_0 from '../../constants/void-0';
import capitalize from '.';

describe('string/capitalize()', () => {
    test('capitalizes a string', () => {
        expect(capitalize('foo bar')).toBe('Foo bar');
    });

    // test('changes only first letter of a string', () => {
    //     expect(capitalize('lorem IPSUM')).toBe('Lorem IPSUM');
    // });

    // test('works with empty string', () => {
    //     expect(capitalize('')).toBe('');
    //     expect(capitalize()).toBe('Undefined');
    //     expect(capitalize(VOID_0)).toBe('Undefined');
    //     expect(capitalize(null)).toBe('Null');
    // });

    test('throws type error if the given value is not a string', () => {
        expect(() => capitalize(123456)).toThrow(INVALID_STRING_ARGUMENT);
    });
});
