import array, {
    at,
    compact,
    isEmpty
} from '.';

describe('doremi/array', () => {
    test('imports doremi/array as object', () => {
        expect(array).toEqual(expect.any(Object));
    });

    test('doremi/array has correct properties', () => {
        expect(array).toHaveProperty('at', at);
        expect(array).toHaveProperty('compact', compact);
        expect(array).toHaveProperty('isEmpty', isEmpty);
    });
});
