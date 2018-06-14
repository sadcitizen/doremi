import curry from '.';

describe('func/curry()', () => {
    test('returns new function', () => {
        expect(curry(jest.fn())).toEqual(expect.any(Function));
    });

    test('partially apply arguments to a function', () => {
        const fn = (a, b, c, d, e) => [a, b, c, d, e];
        const curried = curry(fn);

        expect(curried(1)(2)(3)(4)(5)).toEqual([1, 2, 3, 4, 5]);
        expect(curried(1, 2)(3)(4)(5)).toEqual([1, 2, 3, 4, 5]);
        expect(curried(1)(2, 3)(4)(5)).toEqual([1, 2, 3, 4, 5]);
        expect(curried(1)(2)(3, 4)(5)).toEqual([1, 2, 3, 4, 5]);
        expect(curried(1)(2)(3)(4, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(curried(1, 2, 3)(4)(5)).toEqual([1, 2, 3, 4, 5]);
        expect(curried(1)(2, 3, 4)(5)).toEqual([1, 2, 3, 4, 5]);
        expect(curried(1)(2)(3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(curried(1, 2, 3, 4)(5)).toEqual([1, 2, 3, 4, 5]);
        expect(curried(1)(2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(curried(1, 2)(3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(curried(1, 2)(3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(curried(1, 2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
    });
});
