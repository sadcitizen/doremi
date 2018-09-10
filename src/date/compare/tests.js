import { INVALID_DATES } from '../../constants/errors';
import compare from '.';

describe('date/compare()', () => {
    test('returns -1 if the first date is before the second date', () => {
        expect(compare(new Date(2015, 0), new Date(2015, 1))).toBe(-1);
        expect(compare(new Date(2015, 0, 1), new Date(2015, 0, 2))).toBe(-1);
        expect(compare(new Date(2015, 0, 1, 0), new Date(2015, 0, 1, 1))).toBe(-1);
        expect(compare(new Date(2015, 0, 1, 0, 0), new Date(2015, 0, 1, 1, 1))).toBe(-1);
    });

    test('returns 0 if the dates are equal', () => {
        expect(compare(new Date(2015, 1), new Date(2015, 1))).toBe(0);
        expect(compare(new Date(2015, 0, 1), new Date(2015, 0, 1))).toBe(0);
        expect(compare(new Date(2015, 0, 1, 1), new Date(2015, 0, 1, 1))).toBe(0);
        expect(compare(new Date(2015, 0, 1, 1, 1), new Date(2015, 0, 1, 1, 1))).toBe(0);
    });

    test('returns 1 if the first date is after the second date', () => {
        expect(compare(new Date(2015, 1), new Date(2015, 0))).toBe(1);
        expect(compare(new Date(2015, 0, 2), new Date(2015, 0, 1))).toBe(1);
        expect(compare(new Date(2015, 0, 1, 1), new Date(2015, 0, 1, 0))).toBe(1);
        expect(compare(new Date(2015, 0, 1, 1, 1), new Date(2015, 0, 1, 0, 0))).toBe(1);
    });

    test('throws an error if dates are invalid', () => {
        expect(() => compare(new Date('Invalid date'), new Date('Invalid date'))).toThrow(INVALID_DATES);
    });
});
