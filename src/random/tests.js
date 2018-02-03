import random, { bool, choice, float, guid, hex, int } from '.';

describe('doremi/random', () => {
    test('Imports doremi/random as object', () => {
        expect(random).toEqual(expect.any(Object));
    });

    test('doremi/random has correct properties', () => {
        expect(random.bool).toBe(bool);
        expect(random.choice).toBe(choice);
        expect(random.float).toBe(float);
        expect(random.guid).toBe(guid);
        expect(random.hex).toBe(hex);
        expect(random.int).toBe(int);
    });
});
