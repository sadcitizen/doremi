import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import truncate from '.';

describe('string/truncate()', () => {
    const string = 'lorem ipsum dolor sit amet';

    test('limits number of chars', () => {
        expect(truncate(string, 5)).toBe('lo...');
        expect(truncate(string, 6)).toBe('lor...');
        expect(truncate(string, 7)).toBe('lore...');
        expect(truncate(string, 8)).toBe('lorem...');
        expect(truncate(string, 9)).toBe('lorem...');
        expect(truncate(string, 10)).toBe('lorem i...');
        expect(truncate(string, 11)).toBe('lorem ip...');
        expect(truncate(string, 12)).toBe('lorem ips...');
        expect(truncate(string, 13)).toBe('lorem ipsu...');
        expect(truncate(string, 14)).toBe('lorem ipsum...');
        expect(truncate(string, 15)).toBe('lorem ipsum...');
    });

    test('does not crop string if length is less than limit', () => {
        expect(truncate(string, 100)).toBe('lorem ipsum dolor sit amet');
    });

    test('appends string param', () => {
        const truncated = truncate(string, 10, '--');

        expect(truncated.length).toBeLessThan(11);
        expect(truncated).toBe('lorem ip--');
    });

    test('allows cropping at full words', () => {
        expect(truncate(string, 10, '*', true).length).toBeLessThan(11);
        expect(truncate(string, 10, '*', true)).toBe('lorem*');

        expect(truncate(string, 14, null, true).length).toBeLessThan(15);
        expect(truncate(string, 14, null, true)).toBe('lorem ipsum...');
    });

    test('throws type error if the given value is not a string', () => {
        expect(() => truncate(123456)).toThrow(INVALID_STRING_ARGUMENT);
    });
});
