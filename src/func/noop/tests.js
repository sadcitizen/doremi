import noop from '.';

describe('func/noop()', () => {
    test('be a function', () => {
        expect(noop).toEqual(expect.any(Function));
    });

    test('returns undefined', () => {
        expect(noop()).toBeUndefined();
    });
});
