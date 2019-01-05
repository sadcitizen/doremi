import { INVALID_FUNCTION_ARGUMENT } from '../../constants/errors';
import debounce from '.';

describe('func/debounce()', () => {
    test('returns a new function', () => {
        expect(debounce(jest.fn(), 100)).toEqual(expect.any(Function));
    });

    test('throws exception if function is invalid', () => {
        expect(() => debounce('jest.fn()', 100)).toThrow(INVALID_FUNCTION_ARGUMENT);
    });

    test('executes function until after 50 milliseconds have passed', () => {
        jest.useFakeTimers();
        const fn = jest.fn();
        const debounced = debounce(fn, 50);

        debounced();
        expect(fn).not.toHaveBeenCalled();

        debounced();
        expect(fn).not.toHaveBeenCalled();

        debounced();
        expect(fn).not.toHaveBeenCalled();

        debounced();
        expect(fn).not.toHaveBeenCalled();

        jest.runTimersToTime(50);

        expect(fn).toHaveBeenCalledTimes(1);

        debounced();
        debounced();
        debounced();
        debounced();

        jest.runTimersToTime(50);

        expect(fn).toHaveBeenCalledTimes(2);

        jest.clearAllTimers();
    });

    test('executes function with last passed arguments', () => {
        jest.useFakeTimers();
        const fn = jest.fn();
        const debounced = debounce(fn, 50);

        debounced('a', 'b');
        expect(fn).not.toHaveBeenCalled();

        debounced('c', 'd');
        expect(fn).not.toHaveBeenCalled();

        debounced('e', 'f');
        expect(fn).not.toHaveBeenCalled();

        debounced('g', 'h');
        expect(fn).not.toHaveBeenCalled();

        jest.runTimersToTime(50);

        expect(fn).toHaveBeenCalledWith('g', 'h');

        jest.clearAllTimers();
    });

    test('executes function on the first invocation and stores the result', () => {
        jest.useFakeTimers();

        const fn = jest.fn((x, y) => x + y);
        const debounced = debounce(fn, 50, true);

        expect(debounced(2, 2)).toBe(4);
        expect(fn).toHaveBeenCalledTimes(1);

        expect(debounced(3, 3)).toBe(4);
        expect(debounced(4, 4)).toBe(4);
        expect(debounced(5, 5)).toBe(4);

        expect(fn).toHaveBeenCalledTimes(1);

        jest.runTimersToTime(50);

        expect(debounced(6, 6)).toBe(12);

        expect(fn).toHaveBeenCalledTimes(2);

        jest.clearAllTimers();
    });

    test('cancels debounced execution', () => {
        jest.useFakeTimers();
        const fn = jest.fn();
        const debounced = debounce(fn, 50);

        debounced();
        expect(fn).not.toHaveBeenCalled();

        debounced();
        expect(fn).not.toHaveBeenCalled();

        debounced();
        expect(fn).not.toHaveBeenCalled();

        debounced();
        expect(fn).not.toHaveBeenCalled();

        debounced.cancel();

        jest.runTimersToTime(50);

        expect(fn).not.toHaveBeenCalled();

        jest.clearAllTimers();
    });

    test('clears timeout and executes function on the next invocation if `isLeading` is true', () => {
        jest.useFakeTimers();

        const fn = jest.fn((x, y) => x + y);
        const debounced = debounce(fn, 50, true);

        expect(debounced(2, 2)).toBe(4);
        expect(fn).toHaveBeenCalledTimes(1);

        expect(debounced(3, 3)).toBe(4);
        expect(debounced(4, 4)).toBe(4);
        expect(debounced(5, 5)).toBe(4);

        expect(fn).toHaveBeenCalledTimes(1);

        debounced.cancel();

        expect(debounced(6, 6)).toBe(12);

        expect(fn).toHaveBeenCalledTimes(2);

        jest.clearAllTimers();
    });
});
