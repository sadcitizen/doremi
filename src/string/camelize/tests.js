import camelize from '.';

describe('string/camelize()', () => {
    test('converts string to camel case', () => {
        expect(camelize('lorem ipsum dolor')).toBe('loremIpsumDolor');
        expect(camelize('    lorem   ipsum   dolor   ')).toBe('loremIpsumDolor');
        expect(camelize('--lorem--ipsum--dolor--')).toBe('loremIpsumDolor');
        expect(camelize('__lorem__ipsum__dolor__')).toBe('loremIpsumDolor');
        expect(camelize(123456)).toBe('123456');
    });

    test('works with blank string', () => {
        expect(camelize('')).toBe('');
        expect(camelize('       ')).toBe('');
        expect(camelize('    \n   ')).toBe('');
    });
});
