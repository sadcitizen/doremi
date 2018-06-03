import count from '.';

describe('array/count()', () => {
    test('returns counted elements of the array by value', () => {
        const value = [1, 2, 3, 3, 2, 4];

        expect(count(value)).toEqual({ 1: 1, 2: 2, 3: 2, 4: 1 });
    });

    test('returns empty object for empty array', () => {
        expect(count([])).toEqual({});
    });

    test('allows custom iterator', () => {
        const cities = [{ name: 'Moscow' }, { name: 'London' }, { name: 'Tokyo' }, { name: 'Paris' }, { name: 'Berlin' }];

        expect(count(cities, city => city.name.length)).toEqual({ 5: 2, 6: 3 });
    });
});
