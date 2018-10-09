import partial from '.';

describe('func/partial()', () => {
    test('returns new function', () => {
        const fn = jest.fn();
        const partialFn = partial(fn);

        expect(partialFn).toEqual(expect.any(Function));
    });

    test('partially apply arguments to a function', () => {
        const fn = (a, b, c, d, e) => [a, b, c, d, e];

        expect(partial(fn, 1)(2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(partial(fn, 1, 2)(3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(partial(fn, 1, 2, 3)(4, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(partial(fn, 1, 2, 3, 4)(5)).toEqual([1, 2, 3, 4, 5]);
    });
});
