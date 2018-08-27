import unionWith from '.';

describe('array/unionWith()', () => {
    test('concatenates the arrays', () => {
        const a = ['a', 'b', 'c'];
        const b = ['d', 'e', 'f'];

        expect(unionWith(a, b)).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });

    test('removes duplicates', () => {
        const a = ['a', 'f', 'c'];
        const b = ['d', 'c', 'f'];

        expect(unionWith(a, b)).toEqual(['a', 'f', 'c', 'd']);
        expect(unionWith(b, a)).toEqual(['d', 'c', 'f', 'a']);
    });

    test('works with empty arrays', () => {
        expect(unionWith(['a', 'b', 'c'], [])).toEqual(['a', 'b', 'c']);
        expect(unionWith([], ['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test('allows comparator to specify equality', () => {
        const value = [{ name: 'Bill', age: 20 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }, { name: 'Donald', age: 27 }];
        const other = [{ name: 'George', age: 21 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 24 }, { name: 'John', age: 29 }];
        const unionByNames = [{ name: 'Bill', age: 20 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }, { name: 'Donald', age: 27 }, { name: 'George', age: 21 }, { name: 'John', age: 29 }];
        const unionByNamesAndAges = [{ name: 'Bill', age: 20 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }, { name: 'Donald', age: 27 }, { name: 'George', age: 21 }, { name: 'Barak', age: 24 }, { name: 'John', age: 29 }];

        expect(unionWith(value, other, (l, r) => l.name === r.name)).toEqual(unionByNames);
        expect(unionWith(value, other, (l, r) => l.name === r.name && l.age === r.age)).toEqual(unionByNamesAndAges);
    });
});
