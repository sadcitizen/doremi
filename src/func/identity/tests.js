import identity from '.';

describe('func/identity()', () => {
    test('Returns the first argument', () => {
        expect(identity(0)).toBe(0);
        expect(identity('lorem')).toBe('lorem');
        expect(identity(null)).toBe(null);
        expect(identity(true, false)).toBe(true);
        expect(identity(1, 2, 3, 4, 5)).toBe(1);
    });
});
