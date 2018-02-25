import pipe from '.';

describe('func/pipe()', () => {
    const f1 = jest.fn();
    const f2 = jest.fn();
    const f3 = jest.fn();
    const piped = pipe(f1, f2, f3);

    test('returns new function', () => {
        expect(piped).toEqual(expect.any(Function));
    });

    test('Call all provided functions', () => {
        piped();
        expect(f1).toHaveBeenCalled();
        expect(f2).toHaveBeenCalled();
        expect(f3).toHaveBeenCalled();
    });

    test('returns result of invoking the provided functions', () => {
        const f1 = n => n + 1;
        const f2 = n => n * 2;
        const f3 = n => n - 3;

        expect(pipe(f1)(1)).toBe(2);
        expect(pipe(f1, f2)(1)).toBe(4);
        expect(pipe(f1, f2, f3)(1)).toBe(1);
    });
});
