import VOID_0 from '../../constants/void-0';
import repeat from '.';

describe('string/repeat()', () => {
    test('repeats a string', () => {
        expect(repeat('*', 3)).toBe('***');
        expect(repeat('lorem', 2)).toBe('loremlorem');
        expect(repeat(' ', 5)).toBe('     ');
    });

    test('returns empty string if the second argument is zero', () => {
        expect(repeat(' ', 0)).toBe('');
        expect(repeat('lorem ipsum', 0)).toBe('');
    });

    test('returns empty string if the given string is empty', () => {
        expect(repeat('', 1)).toBe('');
        expect(repeat('', 10)).toBe('');
    });

    test('throws type error if the first argument is not a string', () => {
        const message = 'First argument must be a string';

        expect(() => repeat(0, 1)).toThrow(message);
        expect(() => repeat(VOID_0, 1)).toThrow(message);
        expect(() => repeat(null, 1)).toThrow(message);
    });

    test('throws type error if the second argument is not a number', () => {
        const message = 'Second argument must be a number';

        expect(() => repeat(' ', '1')).toThrow(message);
        expect(() => repeat('null', null)).toThrow(message);
    });

    test('throws range error if the second argument is a negative number', () => {
        const message = 'Second argument must be a positive number or zero';

        expect(() => repeat(' ', -1)).toThrow(message);
        expect(() => repeat('null', -100)).toThrow(message);
    });
});
