import boolean from '.';

describe('random/boolean()', () => {
    test('returns a boolean', () => {
        expect(boolean()).toEqual(expect.any(Boolean));
    });
});
