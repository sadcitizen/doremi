import countBy from '.';

describe('array/countBy()', () => {
    test('Returns counted elements of the array by value', () => {
        const value = [1, 2, 3, 3, 2, 4];

        expect(countBy(value)).toEqual({ '1': 1, '2': 2, '3': 2, '4': 1 });
    });

    test('Returns empty object for empty array', () => {
        expect(countBy([])).toEqual({});
    });

    test('Allows custom iterator', () => {
        const cities = [{ name: 'Moscow' }, { name: 'London' }, { name: 'Tokyo' }, { name: 'Paris' }, { name: 'Berlin' }];

        expect(countBy(cities, city => city.name.length)).toEqual({ '5': 2, '6': 3 });
    });
});
