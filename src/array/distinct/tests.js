import distinct from '.';

describe('array/distinct()', () => {
    test('Returns distinct elements from the array', () => {
        const target = [1, 2, 1, 3, 1, 4];
        const expected = [1, 2, 3, 4];

        expect(distinct(target)).toEqual(expected);
    });

    test('Allows getter to determine equality', () => {
        const target = [{ name: 'Casper' }, { name: 'Richard' }, { name: 'Casper' }];
        const expected = [{ name: 'Casper' }, { name: 'Richard' }];

        const iterator = i => i.name;

        expect(distinct(target, iterator)).toEqual(expected);
    });
});
