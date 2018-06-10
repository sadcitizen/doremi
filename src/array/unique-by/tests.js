import uniqueBy from '.';

describe('array/uniqueBy()', () => {
    test('returns distinct elements from the array', () => {
        const target = [1, 2, 1, 3, 1, 4];
        const expected = [1, 2, 3, 4];

        expect(uniqueBy(target)).toEqual(expected);
    });

    test('allows getter to determine equality', () => {
        const target = [{ name: 'Casper' }, { name: 'Richard' }, { name: 'Casper' }];
        const expected = [{ name: 'Casper' }, { name: 'Richard' }];

        expect(uniqueBy(target, i => i.name)).toEqual(expected);
    });
});
