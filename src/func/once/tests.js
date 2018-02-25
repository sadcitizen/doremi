import once from '.';

describe('func/once()', () => {
    test('returns a new function', () => {
        expect(once(jest.fn())).toEqual(expect.any(Function));
    });

    test('Execute the function once', () => {
        const add = (x, y) => x + y;
        const addOnce = once(add);

        expect(addOnce(1, 1)).toBe(2);
        expect(addOnce(2, 2)).toBe(2);
        expect(addOnce(3, 3)).toBe(2);
        expect(addOnce(4, 4)).toBe(2);
        expect(addOnce(5, 5)).toBe(2);
    });
});
