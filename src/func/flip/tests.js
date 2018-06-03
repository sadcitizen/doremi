import flip from '.';

describe('func/flip()', () => {
    test('returns a new function', () => {
        const fn = jest.fn();

        expect(flip(fn)).toEqual(expect.any(Function));
    });

    test('Reverses the order of arguments', () => {
        const echo = flip((a, b, c) => [a, b, c]);

        expect(echo(1, 2, 3)).toEqual([3, 2, 1]);
    });
});
