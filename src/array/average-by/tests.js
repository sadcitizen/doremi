import averageBy from '.';

describe('array/averageBy()', () => {
    test('returns the average value of array values', () => {
        expect(averageBy([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(4.5);
    });

    test('returns the average value of array values by property', () => {
        const persons = [{ name: 'Amy', age: 19 }, { name: 'Any', age: 21 }, { name: 'Amber', age: 23 }, { name: 'Andy', age: 25 }, { name: 'Antony', age: 27 }];

        expect(averageBy(persons, p => p.age)).toBe(23);
    });
});
