import repeat from '.';

describe('func/_repeat()', () => {
    test('invokes a given amount of times, passes the index as argument', () => {
        const fn = jest.fn();

        repeat(fn, 5);

        expect(fn.mock.calls).toEqual([[0], [1], [2], [3], [4]]);
    });

    test('cancels invocations if the function returned false', () => {
        const fn = jest.fn(index => index < 2);

        repeat(fn, 5);

        expect(fn.mock.calls).toEqual([[0], [1], [2]]);
    });

    test('invokes the function with context', () => {
        const context = {
            count: 0
        };

        repeat(function () {
            this.count += 1;
        }, 10, context);

        expect(context).toEqual({ count: 10 });
    });
});
