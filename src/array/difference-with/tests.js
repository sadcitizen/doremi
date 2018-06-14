import differenceWith from '.';

describe('array/differenceWith()', () => {
    test('concatenates the arrays', () => {
        const a = ['a', 'b', 'c'];
        const b = ['b', 'e', 'f'];

        expect(differenceWith(a, b)).toEqual(['a', 'c']);
    });

    test('removes duplicates', () => {
        const a = ['a', 'f', 'c'];
        const b = ['d', 'c', 'f'];

        expect(differenceWith(a, b)).toEqual(['a', 'f', 'c', 'd']);
        expect(differenceWith(b, a)).toEqual(['d', 'c', 'f', 'a']);
    });

    test('works with empty arrays', () => {
        expect(differenceWith(['a', 'b', 'c'], [])).toEqual(['a', 'b', 'c']);
        expect(differenceWith([], ['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test('allows comparator to specify equality', () => {
        const value = [{ name: 'Bill', age: 20 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }, { name: 'Donald', age: 27 }];
        const other = [{ name: 'George', age: 21 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 24 }, { name: 'John', age: 29 }];
        const differenceByNames = [{ name: 'Bill', age: 20 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }, { name: 'Donald', age: 27 }, { name: 'George', age: 21 }, { name: 'John', age: 29 }];
        const differenceByNamesAndAges = [{ name: 'Bill', age: 20 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }, { name: 'Donald', age: 27 }, { name: 'George', age: 21 }, { name: 'Barak', age: 24 }, { name: 'John', age: 29 }];

        expect(differenceWith(value, other, (l, r) => l.name === r.name)).toEqual(differenceByNames);
        expect(differenceWith(value, other, (l, r) => l.name === r.name && l.age === r.age)).toEqual(differenceByNamesAndAges);
    });
});
