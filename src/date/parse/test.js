import parse from '.';

describe('date/parse()', () => {
    test('returns a clone of the given date', () => {
        const dirty = new Date(2000, 0, 1);
        const date = parse(dirty);

        expect(date).toEqual(new Date(2000, 0, 1));
    });
});
