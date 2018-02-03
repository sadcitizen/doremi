import logic, { and, or, ternary } from '.';

describe('doremi/logic', () => {
    test('Imports doremi/logic as object', () => {
        expect(logic).toEqual(expect.any(Object));
    });

    test('doremi/logic has correct properties', () => {
        expect(logic).toHaveProperty('and', and);
        expect(logic).toHaveProperty('or', or);
        expect(logic).toHaveProperty('ternary', ternary);
    });
});
