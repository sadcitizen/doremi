import defer from '.';

describe('func/defer()', () => {
    test('returns a new function', () => {
        expect(defer(jest.fn(), 100)).toEqual(expect.any(Function));
    });

    test('returns the new function that invoked at the end of the event loop', () => {
        jest.useFakeTimers();
        const fn = jest.fn();
        const deferred = defer(fn);

        deferred();
        expect(fn).not.toHaveBeenCalled();

        jest.runTimersToTime(1);
        expect(fn).toHaveBeenCalled();

        jest.clearAllTimers();
    });

    test('applies arguments', () => {
        jest.useFakeTimers();

        let counter = 0;
        const increment = x => counter += x; // eslint-disable-line no-return-assign
        const deferredIncrement = defer(increment);

        deferredIncrement(10);
        deferredIncrement(10);
        expect(counter).toBe(0);

        jest.runTimersToTime(50);
        expect(counter).toBe(20);

        jest.clearAllTimers();
    });
});
