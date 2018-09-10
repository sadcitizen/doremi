import clone from '.';

describe('date/clone()', () => {
    test('returns a date', () => {
        expect(clone(new Date())).toEqual(expect.any(Date));
    });

    test('clones the given date', () => {
        const original = new Date();
        const cloned = clone(original);

        expect(original).toEqual(cloned);
        expect(original).not.toBe(cloned);
    });
});
