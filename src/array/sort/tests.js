import sort from '.';

describe('array/sort()', () => {
    test('sorts the array numerically', () => {
        expect(sort([9, 12, 3, 4, -5, 18])).toEqual([-5, 3, 4, 9, 12, 18]);
    });

    test('sorts the array alphabetically', () => {
        expect(sort(['red', 'green', 'blue'])).toEqual(['blue', 'green', 'red']);
    });

    test('returns the empty array if source is empty array', () => {
        expect(sort([])).toEqual([]);
    });

    test('allows the custom iterator', () => {
        const guests = [
            {
                name: 'Bill',
                age: 21
            },
            {
                name: 'Hillary',
                age: 22
            },
            {
                name: 'Donald',
                age: 30
            },
            {
                name: 'Barak',
                age: 25
            }
        ];

        const sortedByNameLengthGuests = [
            {
                name: 'Bill',
                age: 21
            },
            {
                name: 'Barak',
                age: 25
            },
            {
                name: 'Donald',
                age: 30
            },
            {
                name: 'Hillary',
                age: 22
            }
        ];

        expect(sort(guests, x => x.name.length)).toEqual(sortedByNameLengthGuests);
    });
});
