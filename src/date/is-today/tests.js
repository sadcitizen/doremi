import mockDate from 'mockdate';
import { INVALID_DATE } from '../../constants/errors';
import isToday from '.';

describe('date/isToday()', () => {
    test('returns true if the date is today', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(isToday(new Date(2015, 2, 23))).toBe(true);

        mockDate.reset();
    });

    test('returns false if the date is not today', () => {
        mockDate.set(new Date(2015, 2, 23));

        expect(isToday(new Date(2015, 2, 22))).toBe(false);
        expect(isToday(new Date(2015, 2, 24))).toBe(false);

        mockDate.reset();
    });

    test('throws the error if value is invalid', () => {
        const invalidDate = new Date('Invalid date');

        expect(() => isToday(invalidDate)).toThrow(INVALID_DATE);
    });
});
