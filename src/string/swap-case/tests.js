import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import swapCase from '.';

describe('string/swapCase()', () => {
    test('swaps case of characters', () => {
        expect(swapCase('lorem ipsum')).toBe('LOREM IPSUM');
        expect(swapCase('lOREM iPSUM')).toBe('Lorem Ipsum');
        expect(swapCase('')).toBe('');
    });

    test('throws type error if the given value is not a string', () => {
        expect(() => swapCase(123456)).toThrow(INVALID_STRING_ARGUMENT);
    });
});
