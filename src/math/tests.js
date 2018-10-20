import math, {
    log
} from '.';

describe('doremi/math', () => {
    test('imports doremi/math as object', () => {
        expect(math).toEqual(expect.any(Object));
    });

    test('doremi/func has correct properties', () => {
        expect(math).toHaveProperty('log', log);
    });
});
