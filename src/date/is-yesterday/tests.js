import mockDate from 'mockdate';
import isYesterday from '.';

describe('date/isYesterday()', () => {
    test('returns true if the date is yesterday', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(isYesterday(new Date(2015, 2, 22))).toBe(true);

        mockDate.reset();
    });

    test('returns false if the date is not yesterday', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(isYesterday(new Date(2015, 2, 20))).toBe(false);
        expect(isYesterday(new Date(2015, 2, 21))).toBe(false);
        expect(isYesterday(new Date(2015, 2, 23))).toBe(false);
        expect(isYesterday(new Date(2015, 2, 24))).toBe(false);

        mockDate.reset();
    });

    test('throws the error if value is invalid', () => {
        const invalidDate = new Date('Invalid date');

        expect(() => isYesterday(invalidDate)).toThrow('A valid date is expected');
    });
});