import func, {
    compose,
    partial,
    pipe
} from '.';

describe('doremi/func', () => {
    test('imports doremi/func as object', () => {
        expect(func).toEqual(expect.any(Object));
    });

    test('doremi/func has correct properties', () => {
        expect(func).toHaveProperty('compose', compose);
        expect(func).toHaveProperty('partial', partial);
        expect(func).toHaveProperty('pipe', pipe);
    });
});
