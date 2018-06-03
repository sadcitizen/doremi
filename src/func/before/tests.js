import before from '.';

describe('func/before()', () => {
    test('returns a new function', () => {
        expect(before(jest.fn(), 5)).toEqual(expect.any(Function));
    });

    test('does not execute the function after 2 calls', () => {
        const add = (x, y) => x + y;
        const addThreeTimes = before(add, 3);

        expect(addThreeTimes(1, 1)).toBe(2);
        expect(addThreeTimes(2, 2)).toBe(4);
        expect(addThreeTimes(3, 3)).toBe(4);
        expect(addThreeTimes(4, 4)).toBe(4);
    });
});
