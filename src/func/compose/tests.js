import compose from '.';

describe('func/compose()', () => {
    const f1 = jest.fn();
    const f2 = jest.fn();
    const f3 = jest.fn();
    const composed = compose(f1, f2, f3);

    test('returns new function', () => {
        expect(composed).toEqual(expect.any(Function));
    });

    test('calls all provided functions', () => {
        composed();
        expect(f1).toHaveBeenCalled();
        expect(f2).toHaveBeenCalled();
        expect(f3).toHaveBeenCalled();
    });

    test('returns result of invoking the provided functions', () => {
        const plus = n => n + 1;
        const multiply = n => n * 2;
        const minus = n => n - 3;

        expect(compose(plus)(1)).toBe(2);
        expect(compose(multiply, plus)(1)).toBe(4);
        expect(compose(minus, multiply, plus)(1)).toBe(1);
    });
});
