import identity from '.';

describe('func/identity()', () => {
    test('returns the first argument', () => {
        expect(identity(0)).toBe(0);
        expect(identity('hi')).toBe('hi');
        expect(identity(null)).toBeNull();
        expect(identity(true, false)).toBe(true);
        expect(identity(1, 2, 3, 4, 5)).toBe(1);
    });
});
