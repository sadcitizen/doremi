import min from '.';

describe('array/min()', () => {
    test('returns the element with lowest value', () => {
        expect(min([1, 2, 3, 4, 5])).toBe(1);
        expect(min([1, -2, 3, 4, -5])).toBe(-5);
    });

    test('returns NaN if the array is empty', () => {
        expect(min([])).toEqual(NaN);
    });

    test('allows the custom iterator', () => {
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

        expect(min(guests, x => x.age)).toEqual({ name: 'Bill', age: 21 });
        expect(min(guests, x => x.name.length)).toEqual({ name: 'Bill', age: 21 });
    });
});
