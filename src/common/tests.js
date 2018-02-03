import common, { isDefined, type } from '.';

describe('doremi/common', () => {
    test('Imports doremi/common as object', () => {
        expect(common).toEqual(expect.any(Object));
    });

    test('doremi/common has correct properties', () => {
        expect(common).toHaveProperty('isDefined', isDefined);
        expect(common).toHaveProperty('type', type);
    });
});
