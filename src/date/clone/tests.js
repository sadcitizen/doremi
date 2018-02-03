import clone from '.';

describe('datetime/clone()', function () {
    test('Return a date', function () {
        expect(clone(new Date())).toEqual(expect.any(Date));
    });

    test('The cloned date should be equal to original date', function () {
        const orig = new Date();
        const cloned = clone(orig);

        expect(orig).toEqual(cloned);
    });
});
