import unionWith from '.';

describe('array/unionWith()', () => {
    test('concatenates the arrays', () => {
        const a = ['a', 'b', 'c'];
        const b = ['d', 'e', 'f'];
        const c = ['g', 'h', 'i'];

        expect(unionWith(a, b, c)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
    });

    // test('removes duplicates', () => {
    //     const a = ['a', 'f', 'c'];
    //     const b = ['d', 'c', 'f'];
    //
    //     expect(union(a, b)).toEqual(['a', 'f', 'c', 'd'].sort());
    //     expect(union(b, a)).toEqual(['a', 'f', 'c', 'd'].sort());
    // });
    //
    // test('uses empty array for undefined source', () => {
    //     expect(union(['a', 'b', 'c'], [])).toEqual(['a', 'b', 'c']);
    //     expect(union([], ['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    // });
});
