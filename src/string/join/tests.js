import join from '.';

describe('string/join()', () => {
    test('Joins strings', () => {
        expect(join(' ', 'lorem', 'ipsum', 'dolor', 'sit', 'amet')).toBe('lorem ipsum dolor sit amet');
        expect(join('', 'h', 'e', 'l', 'lo')).toBe('hello');
        expect(join('+', 1, 2, 3)).toBe('1+2+3');
    });

    test('Ignores null, undefined and empty strings', () => {
        expect(join()).toBe('');
        expect(join('', '', '')).toBe('');
        expect(join(' ', null, null)).toBe('');
        expect(join(' ', void 0, void 0)).toBe('');
        expect(join(' ', 'lorem', void 0, void 0)).toBe('lorem');
    });
});
