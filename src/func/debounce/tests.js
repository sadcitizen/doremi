import { INVALID_FUNCTION_ARGUMENT } from '../../constants/errors';
import debounce from '.';

describe('func/debounce()', () => {
    test('returns a new function', () => {
        expect(debounce(jest.fn(), 100)).toEqual(expect.any(Function));
    });

    test('throws exception if function is invalid', () => {
        expect(() => debounce('jest.fn()', 100)).toThrow(INVALID_FUNCTION_ARGUMENT);
    });
});
