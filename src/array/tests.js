import array, { append, at, compact, countBy, distinct, equals, first, flatten, groupBy, last, max, min, partition, prepend, remove, sortBy, sum, union, update } from '.';

describe('doremi/array', () => {
    test('Imports doremi/array as object', () => {
        expect(array).toEqual(expect.any(Object));
    });

    test('doremi/array has correct properties', () => {
        expect(array).toHaveProperty('append', append);
        expect(array).toHaveProperty('at', at);
        expect(array).toHaveProperty('compact', compact);
        expect(array).toHaveProperty('countBy', countBy);
        expect(array).toHaveProperty('distinct', distinct);
        expect(array).toHaveProperty('equals', equals);
        expect(array).toHaveProperty('first', first);
        expect(array).toHaveProperty('flatten', flatten);
        expect(array).toHaveProperty('groupBy', groupBy);
        expect(array).toHaveProperty('last', last);
        expect(array).toHaveProperty('max', max);
        expect(array).toHaveProperty('min', min);
        expect(array).toHaveProperty('partition', partition);
        expect(array).toHaveProperty('prepend', prepend);
        expect(array).toHaveProperty('remove', remove);
        expect(array).toHaveProperty('sortBy', sortBy);
        expect(array).toHaveProperty('sum', sum);
        expect(array).toHaveProperty('union', union);
        expect(array).toHaveProperty('update', update);
    });
});
