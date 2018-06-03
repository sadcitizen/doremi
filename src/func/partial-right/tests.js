import partialRight from '.';

describe('func/partialRight()', () => {
    test('returns new function', () => {
        const fn = jest.fn();
        const partialFn = partialRight(fn);

        expect(partialFn).toEqual(expect.any(Function));
    });

    test('partially apply arguments to a function', () => {
        const fn = (a, b, c, d, e) => [a, b, c, d, e];

        const partialFn = partialRight(fn, 1, 'string', true);
        const result = partialFn(3, false);

        expect(result).toEqual([3, false, 1, 'string', true]);
    });
});
