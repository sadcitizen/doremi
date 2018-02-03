import random, { bool, choice, date, float, guid, hex, int } from '.';

describe('doremi/random', () => {
    test('Imports doremi/random as object', () => {
        expect(random).toEqual(expect.any(Object));
    });

    test('doremi/random has correct properties', () => {
        expect(random).toHaveProperty('bool', bool);
        expect(random).toHaveProperty('choice', choice);
        expect(random).toHaveProperty('date', date);
        expect(random).toHaveProperty('float', float);
        expect(random).toHaveProperty('guid', guid);
        expect(random).toHaveProperty('hex', hex);
        expect(random).toHaveProperty('int', int);
    });
});
