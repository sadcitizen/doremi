import array, {
    first,
    last
} from '.';

describe('doremi/array', () => {
    test('imports doremi/array as object', () => {
        expect(array).toEqual(expect.any(Object));
    });

    test('doremi/array has correct properties', () => {
        expect(array).toHaveProperty('first', first);
        expect(array).toHaveProperty('last', last);
    });
});
