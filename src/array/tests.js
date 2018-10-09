import array, {
    chunk,
    compact,
    differenceWith,
    equals,
    first,
    includesWith,
    intersectionWith,
    last,
    partitionWith,
    unionWith,
    uniqueWith
} from '.';

describe('doremi/array', () => {
    test('imports doremi/array as object', () => {
        expect(array).toEqual(expect.any(Object));
    });

    test('doremi/array has correct properties', () => {
        expect(array).toHaveProperty('chunk', chunk);
        expect(array).toHaveProperty('compact', compact);
        expect(array).toHaveProperty('differenceWith', differenceWith);
        expect(array).toHaveProperty('equals', equals);
        expect(array).toHaveProperty('first', first);
        expect(array).toHaveProperty('includesWith', includesWith);
        expect(array).toHaveProperty('intersectionWith', intersectionWith);
        expect(array).toHaveProperty('last', last);
        expect(array).toHaveProperty('partitionWith', partitionWith);
        expect(array).toHaveProperty('unionWith', unionWith);
        expect(array).toHaveProperty('uniqueWith', uniqueWith);
    });
});
