import compose from '.';

describe('func/compose()', () => {
    const f1 = jest.fn();
    const f2 = jest.fn();
    const f3 = jest.fn();
    const composed = compose(f1, f2, f3);

    test('Return new function', () => {
        expect(composed).toEqual(expect.any(Function));
    });

    test('Call all provided functions', () => {
        composed();
        expect(f1).toHaveBeenCalled();
        expect(f2).toHaveBeenCalled();
        expect(f3).toHaveBeenCalled();
    });

    test('Return result of invoking the provided functions', () => {
        const f1 = n => n + 1;
        const f2 = n => n * 2;
        const f3 = n => n - 3;

        expect(compose(f1)(1)).toBe(2);
        expect(compose(f2, f1)(1)).toBe(4);
        expect(compose(f3, f2, f1)(1)).toBe(1);
    });
});
