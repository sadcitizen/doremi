import { INVALID_FUNCTION_ARGUMENT } from '../../constants/errors';
import throttle from '.';

describe('func/throttle()', () => {
    test('returns a new function', () => {
        expect(throttle(jest.fn(), 100)).toEqual(expect.any(Function));
    });

    test('throws exception if function is invalid', () => {
        expect(() => throttle('jest.fn()', 100)).toThrow(INVALID_FUNCTION_ARGUMENT);
    });
});
