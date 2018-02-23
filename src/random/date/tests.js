import date from '.';

describe('random/date()', () => {
    test('returns a date between 1 January 2000 and 31 December 2010', () => {
        const jan = new Date(2000, 0, 1);
        const dec = new Date(2010, 11, 31);
        const result = date(jan, dec);

        expect(result.getTime()).toBeGreaterThan(jan.getTime());
        expect(result.getTime()).toBeLessThan(dec.getTime());
    });

    test('Throws the exception if maximum value is not provided', () => {
        expect(() => date(new Date(2000, 0, 1))).toThrow('Maximum value must be provided.');
    });

    test('Throws the exception if minimum value is not provided', () => {
        expect(() => date(void 0, new Date(2000, 11, 31))).toThrowError('Minimum value must be provided.');
    });

    test('Throws the exception if minimum value is greater than maximum value', () => {
        expect(() => date(new Date(2001, 11, 31), new Date(2000, 11, 31))).toThrowError('Minimum value cannot be greater than maximum value.');
    });
});
