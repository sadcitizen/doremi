import bool from '.';

describe('random/bool()', () => {
    test('returns a boolean', () => {
        expect(bool()).toEqual(expect.any(Boolean));
    });
});
