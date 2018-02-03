import doremi, { array, common, date, func, logic, number, object, random, string } from '.';

describe('doremi', () => {
    test('Imports doremi as object', () => {
        expect(doremi).toEqual(expect.any(Object));
    });

    test('Doremi has correct properties', () => {
        expect(doremi).toHaveProperty('array', array);
        expect(doremi).toHaveProperty('common', common);
        expect(doremi).toHaveProperty('date', date);
        expect(doremi).toHaveProperty('func', func);
        expect(doremi).toHaveProperty('logic', logic);
        expect(doremi).toHaveProperty('number', number);
        expect(doremi).toHaveProperty('object', object);
        expect(doremi).toHaveProperty('random', random);
        expect(doremi).toHaveProperty('string', string);
    });
});
