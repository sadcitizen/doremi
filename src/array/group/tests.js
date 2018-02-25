import group from '.';

describe('array/group()', () => {
    test('returns grouped elements of the array by value', () => {
        const value = [1, 2, 3, 3, 2, 4];

        expect(group(value)).toEqual({ '1': [1], '2': [2, 2], '3': [3, 3], '4': [4] });
    });

    test('returns empty object for empty array', () => {
        expect(group([])).toEqual({});
    });

    test('allows custom iterator', () => {
        const cities = [{ name: 'Moscow' }, { name: 'London' }, { name: 'Tokyo' }, { name: 'Paris' }, { name: 'Berlin' }];

        expect(group(cities, city => city.name.length)).toEqual({
            '5': [{ name: 'Tokyo'}, { name: 'Paris' }],
            '6': [{ name: 'Moscow' }, { name: 'London' }, { name: 'Berlin' }]
        });
    });
});
