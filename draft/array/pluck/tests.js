import pluck from '.';

describe('array/pluck()', () => {
    test('return the array of values', () => {
        const persons = [
            {
                name: 'Jane',
                age: 20
            },
            {
                name: 'Jordan',
                age: 21
            },
            {
                name: 'Joseph',
                age: 19
            },
            {
                name: 'John',
                age: 25
            }
        ];

        expect(pluck(persons, 'name')).toEqual(['Jane', 'Jordan', 'Joseph', 'John']);
        expect(pluck(persons, 'age')).toEqual([20, 21, 19, 25]);
    });
});
