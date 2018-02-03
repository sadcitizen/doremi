import bool from '.';

describe('random/bool()', () => {
    test('Returns a boolean', () => {
        expect(bool()).toEqual(expect.any(Boolean));
    });
});
