import memoize from '.';

describe('func/memoize()', () => {
    test('Returns a new function', () => {
        expect(memoize(jest.fn(), 100)).toEqual(expect.any(Function));
    });

    test('Memoizes functions', () => {
        const sum = jest.fn((x, y) => x + y);
        const square = jest.fn(x => x * x);

        const memoizedSum = memoize(sum);
        expect(memoizedSum(2, 2)).toBe(4);
        expect(memoizedSum(2, 2)).toBe(4);
        expect(memoizedSum(2, 2)).toBe(4);

        expect(sum).toHaveBeenCalledTimes(1);

        expect(memoizedSum(3, 3)).toBe(6);

        expect(sum).toHaveBeenCalledTimes(2);

        const memoizedSquare = memoize(square);
        expect(memoizedSquare(3, 3)).toBe(9);
        expect(memoizedSquare(3, 3)).toBe(9);
        expect(memoizedSquare(3, 3)).toBe(9);

        expect(square).toHaveBeenCalledTimes(1);
    });
});
