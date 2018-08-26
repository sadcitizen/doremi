import random, {
    boolean,
    choice,
    date,
    float,
    guid,
    hex,
    integer
} from '.';

describe('doremi/random', () => {
    test('imports doremi/random as object', () => {
        expect(random).toEqual(expect.any(Object));
    });

    test('doremi/random has correct properties', () => {
        expect(random).toHaveProperty('boolean', boolean);
        expect(random).toHaveProperty('choice', choice);
        expect(random).toHaveProperty('date', date);
        expect(random).toHaveProperty('float', float);
        expect(random).toHaveProperty('guid', guid);
        expect(random).toHaveProperty('hex', hex);
        expect(random).toHaveProperty('integer', integer);
    });
});
