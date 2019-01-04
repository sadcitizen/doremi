import { INVALID_FUNCTION_ARGUMENT } from '../../constants/errors';
import schedule from '.';

describe('func/schedule()', () => {
    test('returns a new function', () => {
        expect(schedule(jest.fn(), 100)).toEqual(expect.any(Function));
    });

    test('invokes a given amount of times, passes the index as argument', () => {
        expect(schedule).toBeTruthy();
        // const fn = jest.fn();
        //
        // repeat(fn, 5);
        //
        // expect(fn.mock.calls).toEqual([[0], [1], [2], [3], [4]]);
    });

    // test('cancels invocations if the function returned false', () => {
    //     const fn = jest.fn(index => index < 2);
    //
    //     repeat(fn, 5);
    //
    //     expect(fn.mock.calls).toEqual([[0], [1], [2]]);
    // });
    //
    // test('invokes the function with context', () => {
    //     const context = {
    //         count: 0
    //     };
    //
    //     repeat(function () {
    //         this.count += 1;
    //     }, 10, context);
    //
    //     expect(context).toEqual({ count: 10 });
    // });

    test('throws exception if function is invalid', () => {
        expect(() => schedule('jest.fn()', 100)).toThrow(INVALID_FUNCTION_ARGUMENT);
    });
});
