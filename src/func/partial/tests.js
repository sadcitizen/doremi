import partial from '.';

describe('func/partial()', () => {
    test('returns new function', () => {
        const fn = jest.fn();
        const partialFn = partial(fn);

        expect(partialFn).toEqual(expect.any(Function));
    });

    test('Partially apply arguments to a function', () => {
        const fn = (a, b, c, d, e) => [a, b, c, d, e];

        const partialFn = partial(fn, 1, 'string', true);
        const result = partialFn(3, false);

        expect(result).toEqual([1, 'string', true, 3, false]);
    });
});
