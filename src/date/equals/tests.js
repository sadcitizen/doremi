import equals from '.';

describe('date/equals()', () => {
    test('returns true if dates are equal', () => {
        const value = new Date(2015, 2, 23);
        const other = new Date(2015, 2, 23);

        expect(equals(value, other)).toBe(true);
    });

    test('returns false if dates are not equal', () => {
        const value = new Date(2015, 2, 23);
        const other = new Date(2015, 4, 16);

        expect(equals(value, other)).toBe(false);
    });

    test('returns true if years are equal', () => {
        const value = new Date(2015, 2, 23);
        const other = new Date(2015, 3, 16);

        expect(equals(value, other, 'year')).toBe(true);
        expect(equals(value, other, 'Y')).toBe(true);
    });

    test('returns false if years are not equal', () => {
        const value = new Date(2015, 2, 23);
        const other = new Date(2014, 3, 16);

        expect(equals(value, other, 'year')).toBe(false);
        expect(equals(value, other, 'Y')).toBe(false);
    });

    test('returns true if months are equal', () => {
        const value = new Date(2015, 2, 23);
        const other = new Date(2015, 2, 16);

        expect(equals(value, other, 'month')).toBe(true);
        expect(equals(value, other, 'M')).toBe(true);
    });

    test('returns false if months are not equal', () => {
        const value = new Date(2015, 2, 23);
        const other = new Date(2015, 3, 16);

        expect(equals(value, other, 'month')).toBe(false);
        expect(equals(value, other, 'M')).toBe(false);
    });

    test('returns true if days are equal', () => {
        const value = new Date(2015, 2, 23);
        const other = new Date(2015, 2, 23);

        expect(equals(value, other, 'day')).toBe(true);
        expect(equals(value, other, 'D')).toBe(true);
    });

    test('returns false if days are not equal', () => {
        const value = new Date(2015, 2, 23);
        const other = new Date(2015, 2, 16);

        expect(equals(value, other, 'day')).toBe(false);
        expect(equals(value, other, 'D')).toBe(false);
    });

    test('returns true if hours are equal', () => {
        const value = new Date(2015, 2, 23, 3);
        const other = new Date(2015, 2, 23, 3);

        expect(equals(value, other, 'hour')).toBe(true);
        expect(equals(value, other, 'h')).toBe(true);
    });

    test('returns false if hours are not equal', () => {
        const value = new Date(2015, 2, 23, 3);
        const other = new Date(2015, 2, 23, 5);

        expect(equals(value, other, 'hour')).toBe(false);
        expect(equals(value, other, 'h')).toBe(false);
    });

    test('returns true if minutes are equal', () => {
        const value = new Date(2015, 2, 23, 3, 10);
        const other = new Date(2015, 2, 23, 3, 10);

        expect(equals(value, other, 'minute')).toBe(true);
        expect(equals(value, other, 'm')).toBe(true);
    });

    test('returns false if minutes are not equal', () => {
        const value = new Date(2015, 2, 23, 3, 10);
        const other = new Date(2015, 2, 23, 3, 13);

        expect(equals(value, other, 'minute')).toBe(false);
        expect(equals(value, other, 'm')).toBe(false);
    });

    test('returns true if seconds are equal', () => {
        const value = new Date(2015, 2, 23, 3, 10, 36);
        const other = new Date(2015, 2, 23, 3, 10, 36);

        expect(equals(value, other, 'second')).toBe(true);
        expect(equals(value, other, 's')).toBe(true);
    });

    test('returns false if seconds are not equal', () => {
        const value = new Date(2015, 2, 23, 3, 10, 36);
        const other = new Date(2015, 2, 23, 3, 10, 48);

        expect(equals(value, other, 'second')).toBe(false);
        expect(equals(value, other, 's')).toBe(false);
    });

    test('returns true if milliseconds are equal', () => {
        const value = new Date(2015, 2, 23, 3, 10, 36, 216);
        const other = new Date(2015, 2, 23, 3, 10, 36, 216);

        expect(equals(value, other, 'millisecond')).toBe(true);
        expect(equals(value, other, 'ms')).toBe(true);
    });

    test('returns false if milliseconds are not equal', () => {
        const value = new Date(2015, 2, 23, 3, 10, 36, 216);
        const other = new Date(2015, 2, 23, 3, 10, 36, 486);

        expect(equals(value, other, 'millisecond')).toBe(false);
        expect(equals(value, other, 'ms')).toBe(false);
    });
});
