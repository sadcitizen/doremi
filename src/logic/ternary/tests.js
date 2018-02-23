import ternary from '.';

describe('logic/ternary()', () => {
    test('returns truthy value if the condition is true', () => {
        expect(ternary(true, 42, 0)).toBe(42);
    });

    test('returns falsy value if the condition is false', () => {
        expect(ternary(false, 42, 0)).toBe(0);
    });

    test('works with nested ternaries', () => {
        const result = ternary(
            true,
            ternary(false, 0, 1),
            null
        );

        expect(result).toBe(1);
    });
});
