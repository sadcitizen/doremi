import flip from '.';

describe('func/flip()', () => {
    test('returns a new function', () => {
        expect(flip(jest.fn())).toEqual(expect.any(Function));
    });

    test('reverses the order of arguments', () => {
        const echo = flip((a, b, c) => [a, b, c]);

        expect(echo(1, 2, 3)).toEqual([3, 2, 1]);
    });
});
