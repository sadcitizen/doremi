import noop from '.';

describe('func/noop()', () => {
    test('Be a function', () => {
        expect(noop).toEqual(expect.any(Function));
    });

    test('Return undefined', () => {
        expect(noop()).toBe(undefined);
    });
});
