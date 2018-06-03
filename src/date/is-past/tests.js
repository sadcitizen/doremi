import isPast from '.';
import mockDate from 'mockdate';

describe('date/isPast()', () => {
    test('returns true if the date is past', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(isPast(new Date(2015, 2, 22))).toBe(true);
        expect(isPast(new Date(2015, 1, 22))).toBe(true);
        expect(isPast(new Date(2014, 1, 22))).toBe(true);

        mockDate.reset();
    });

    test('returns false if the date is not past', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(isPast(new Date(2015, 2, 24))).toBe(false);
        expect(isPast(new Date(2015, 3, 23))).toBe(false);
        expect(isPast(new Date(2016, 2, 23))).toBe(false);

        mockDate.reset();
    });

    test('throws the error if value is invalid', () => {
        const invalidDate = new Date('Invalid date');

        expect(() => isPast(invalidDate)).toThrow('A valid date is expected');
    });
});
