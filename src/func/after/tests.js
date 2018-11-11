import {
    INVALID_FUNCTION_FIRST_ARGUMENT,
    INVALID_NUMBER_SECOND_ARGUMENT
} from '../../constants/errors';
import after from '.';

describe('func/after()', () => {
    test('returns a new function', () => {
        expect(after(jest.fn(), 2)).toEqual(expect.any(Function));
    });

    test('executes the function after 5 calls', () => {
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

    test('applies arguments', () => {
        const fn = jest.fn();
        const afterTwoTimes = after(fn, 2);

        afterTwoTimes();
        afterTwoTimes('hi!');
        expect(fn).toHaveBeenCalledWith('hi!');
    });

    test('throws exception if function is invalid', () => {
        expect(() => after('jest.fn()', 100)).toThrow(INVALID_FUNCTION_FIRST_ARGUMENT);
        expect(() => after(jest.fn(), '100')).toThrow(INVALID_NUMBER_SECOND_ARGUMENT);
        expect(() => after(jest.fn(), 0)).toThrow('Second argument must be a positive number');
        expect(() => after(jest.fn(), -1)).toThrow('Second argument must be a positive number');
    });
});
