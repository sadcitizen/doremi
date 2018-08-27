import logic, {
    and,
    // equals,
    // gt,
    // gte,
    // lt,
    // lte,
    or,
    ternary
} from '.';

describe('doremi/logic', () => {
    test('imports doremi/logic as object', () => {
        expect(logic).toEqual(expect.any(Object));
    });

    test('doremi/logic has correct properties', () => {
        expect(logic).toHaveProperty('and', and);
        // expect(logic).toHaveProperty('equals', equals);
        // expect(logic).toHaveProperty('gt', gt);
        // expect(logic).toHaveProperty('gte', gte);
        // expect(logic).toHaveProperty('lt', lt);
        // expect(logic).toHaveProperty('lte', lte);
        expect(logic).toHaveProperty('or', or);
        expect(logic).toHaveProperty('ternary', ternary);
    });
});
