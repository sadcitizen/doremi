import common from '.';

describe('doremi/common', () => {
    test('imports doremi/common as object', () => {
        expect(common).toEqual(expect.any(Object));
    });
});
