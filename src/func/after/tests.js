import after from '.';

describe('func/after()', () => {
    test('returns a new function', () => {
        expect(after(jest.fn(), 2)).toEqual(expect.any(Function));
    });

    test('Executes the function after 5 calls', () => {
        const fn = jest.fn();
        const afterFiveTimes = after(fn, 5);

        afterFiveTimes();
        expect(fn).not.toHaveBeenCalled();

        afterFiveTimes();
        expect(fn).not.toHaveBeenCalled();

        afterFiveTimes();
        expect(fn).not.toHaveBeenCalled();

        afterFiveTimes();
        expect(fn).not.toHaveBeenCalled();

        afterFiveTimes();
        expect(fn).toHaveBeenCalled();
    });

    test('Apply arguments', () => {
        const fn = jest.fn();
        const afterTwoTimes = after(fn, 2);

        afterTwoTimes();
        afterTwoTimes('hi!');
        expect(fn).toHaveBeenCalledWith('hi!');
    });
});
