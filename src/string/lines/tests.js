import lines from '.';

describe('string/lines()', () => {
    test('returns an array of lines', () => {
        expect(lines('lorem\r\nipsum')).toEqual(['lorem', 'ipsum']);
        expect(lines('lorem ipsum')).toEqual(['lorem ipsum']);
        expect(lines('lorem\ripsum')).toEqual(['lorem\ripsum']);
    });

    test('works with empty strings', () => {
        expect(lines('')).toEqual(['']);
        expect(lines('            ')).toEqual(['            ']);
        expect(lines(' \t ')).toEqual([' \t ']);
        expect(lines(' \n ')).toEqual([' ', ' ']);
    });
});
