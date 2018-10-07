import array, {
    chunk,
    compact,
    equals,
    first,
    last,
    partitionBy
} from '.';

describe('doremi/array', () => {
    test('imports doremi/array as object', () => {
        expect(array).toEqual(expect.any(Object));
    });

    test('doremi/array has correct properties', () => {
        expect(array).toHaveProperty('chunk', chunk);
        expect(array).toHaveProperty('compact', compact);
        expect(array).toHaveProperty('equals', equals);
        expect(array).toHaveProperty('first', first);
        expect(array).toHaveProperty('last', last);
        expect(array).toHaveProperty('partitionBy', partitionBy);
    });
});
