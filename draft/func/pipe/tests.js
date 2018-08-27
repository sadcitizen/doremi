import pipe from '.';

describe('func/pipe()', () => {
    const f1 = jest.fn();
    const f2 = jest.fn();
    const f3 = jest.fn();
    const piped = pipe(f1, f2, f3);

    test('returns new function', () => {
        expect(piped).toEqual(expect.any(Function));
    });

    test('call all provided functions', () => {
        piped();
        expect(f1).toHaveBeenCalled();
        expect(f2).toHaveBeenCalled();
        expect(f3).toHaveBeenCalled();
    });

    test('returns result of invoking the provided functions', () => {
        const plus = n => n + 1;
        const multiply = n => n * 2;
        const minus = n => n - 3;

        expect(pipe(plus)(1)).toBe(2);
        expect(pipe(plus, multiply)(1)).toBe(4);
        expect(pipe(plus, multiply, minus)(1)).toBe(1);
    });
});
