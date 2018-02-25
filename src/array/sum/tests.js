import sum from '.';

describe('array/sum()', () => {
    test('returns the sum of values', () => {
        expect(sum([1, 2, 3, 4, 5])).toBe(15);
        expect(sum([1, -2, 3, 4, -5])).toBe(1);
    });

    test('returns zero if the array is empty', () => {
        expect(sum([])).toEqual(0);
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

        expect(sum(guests, x => x.age)).toBe(98);
        expect(sum(guests, x => x.name.length)).toBe(22);
    });
});
