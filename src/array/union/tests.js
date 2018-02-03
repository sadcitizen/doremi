import union from '.';

describe('array/union()', () => {
    test('Concats the arrays', function () {
        const a = ['a', 'b', 'c'];
        const b = ['d', 'e', 'f'];

        expect(union(a, b)).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });

    test('Removes duplicates', function () {
        const a = ['a', 'f', 'c'];
        const b = ['d', 'c', 'f'];

        expect(union(a, b)).toEqual(['a', 'f', 'c', 'd']);
    });

    test('Uses empty array for undefined source', () => {
        expect(union(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test('Allows custom iterator', () => {
        const target = [{ count: 1 }, { count: 2 }, { count: 3 }];
        const source = [{ count: 4 }, { count: 2 }];

        expect(union(target, source, x => x.count)).toEqual([{ count: 1 }, { count: 2 }, { count: 3 }, { count: 4 }]);
    });
});
