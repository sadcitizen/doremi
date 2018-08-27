import clone from '.';

describe('datetime/clone()', () => {
    test('returns a date', () => {
        expect(clone(new Date())).toEqual(expect.any(Date));
    });

    test('the cloned date should be equal to original date', () => {
        const original = new Date();
        const cloned = clone(original);

        expect(original).toEqual(cloned);
        expect(original).not.toBe(cloned);
    });
});
