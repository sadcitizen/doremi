import number from '.';

describe('doremi/number', () => {
    test('imports doremi/number as object', () => {
        expect(number).toEqual(expect.any(Object));
    });
});
