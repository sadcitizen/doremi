import lt from '.';

describe('logic/lt()', () => {
    test('returns true if value is less than other value', () => {
        expect(lt(1, 42)).toBe(true);
    });

    test('returns false if value is greater than other value', () => {
        expect(lt(42, 1)).toBe(false);
    });

    test('returns false if value is equal to other value', () => {
        expect(lt(42, 42)).toBe(false);
    });
});
