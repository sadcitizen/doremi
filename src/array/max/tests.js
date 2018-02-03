import max from '.';

describe('array/max()', () => {
    test('Returns the element with greatest value', () => {
        expect(max([1, 2, 3, 4, 5])).toBe(5);
        expect(max([1, -2, 3, 4, -5])).toBe(4);
    });

    test('Returns NaN if the array is empty', () => {
        expect(max([])).toEqual(NaN);
    });

    test('Allows the custom iterator', () => {
        const guests = [{
            name: 'Bill',
            age: 21
        }, {
            name: 'Hillary',
            age: 22
        }, {
            name: 'Donald',
            age: 30
        }, {
            name: 'Barak',
            age: 25
        }];

        expect(max(guests, x => x.age)).toEqual({ name: 'Donald', age: 30 });
        expect(max(guests, x => x.name.length)).toEqual({ name: 'Hillary', age: 22 });
    });
});
