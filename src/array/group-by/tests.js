import groupBy from '.';

describe('array/groupByBy()', () => {
    test('returns grouped elements of the array by value', () => {
        const value = [1, 2, 3, 3, 2, 4];

        expect(groupBy(value)).toEqual({ 1: [1], 2: [2, 2], 3: [3, 3], 4: [4] });
    });

    test('returns empty object for empty array', () => {
        expect(groupBy([])).toEqual({});
    });

    test('allows custom iterator', () => {
        const cities = [{ name: 'Moscow' }, { name: 'London' }, { name: 'Tokyo' }, { name: 'Paris' }, { name: 'Berlin' }];

        expect(groupBy(cities, city => city.name.length)).toEqual({
            5: [{ name: 'Tokyo' }, { name: 'Paris' }],
            6: [{ name: 'Moscow' }, { name: 'London' }, { name: 'Berlin' }]
        });
    });
});
