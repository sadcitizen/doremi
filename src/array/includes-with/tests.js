import includesWith from '.';

describe('array/includesWith()', () => {
    const persons = [{ name: 'Amy', age: 19 }, { name: 'Any', age: 21 }, { name: 'Amber', age: 23 }, { name: 'Andy', age: 25 }, { name: 'Antony', age: 27 }];

    test('checks if the array includes value', () => {
        expect(includesWith(persons, p => p.age === 19)).toBe(true);
        expect(includesWith(persons, p => p.name === 'Amy')).toBe(true);
        expect(includesWith(persons, p => p.name === 'Amy' && p.age === 19)).toBe(true);

        expect(includesWith(persons, p => p.age === 20)).toBe(false);
        expect(includesWith(persons, p => p.name === 'Bob')).toBe(false);
        expect(includesWith(persons, p => p.name === 'Amy' && p.age === 20)).toBe(false);
    });

    test('checks if the array includes value from specified index', () => {
        expect(includesWith(persons, p => p.age === 21)).toBe(true);
        expect(includesWith(persons, p => p.age === 21, 2)).toBe(false);
    });
});
