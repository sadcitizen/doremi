import { VOID_0 } from '../../internal/constants';
import join from '.';

describe('string/join()', () => {
    test('joins strings', () => {
        expect(join(' ', 'lorem', 'ipsum', 'dolor', 'sit', 'amet')).toBe('lorem ipsum dolor sit amet');
        expect(join('', 'h', 'e', 'l', 'lo')).toBe('hello');
        expect(join('+', 1, 2, 3)).toBe('1+2+3');
    });

    test('ignores null, undefined and empty strings', () => {
        expect(join()).toBe('');
        expect(join('', '', '')).toBe('');
        expect(join(' ', null, null)).toBe('');
        expect(join(' ', VOID_0, VOID_0)).toBe('');
        expect(join(' ', 'lorem', VOID_0, VOID_0)).toBe('lorem');
    });
});
