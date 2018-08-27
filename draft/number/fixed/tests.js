import fixed from '.';

describe('number/fixed()', () => {
    test('returns formatted number', () => {
        expect(fixed(1.23456789, 0)).toBe('1');
        expect(fixed(1.23456789, 1)).toBe('1.2');
        expect(fixed(1.23456789, 2)).toBe('1.23');
        expect(fixed(1.23456789, 3)).toBe('1.234');
        expect(fixed(1.23456789, 4)).toBe('1.2345');
        expect(fixed(1.23456789, 5)).toBe('1.23456');
        expect(fixed(1.23456789, 6)).toBe('1.234567');
        expect(fixed(1.23456789, 7)).toBe('1.2345678');
        expect(fixed(1.23456789, 8)).toBe('1.23456789');
        expect(fixed(1.23456789, 9)).toBe('1.234567890');
    });

    test('treats negative precision as zero', () => {
        expect(fixed(1234.56789, -3)).toBe('1234');
        expect(fixed(12.3456789, -4)).toBe('12');
    });
});
