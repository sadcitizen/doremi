import random from '.';

describe('doremi/random', () => {
    test('imports doremi/random as object', () => {
        expect(random).toEqual(expect.any(Object));
    });
});
