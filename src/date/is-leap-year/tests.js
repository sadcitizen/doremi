import { INVALID_DATE } from '../../constants/errors';
import isLeapYear from '.';

describe('date/isLeapYear()', () => {
    test('returns true if the year of date is a leap year', () => {
        expect(isLeapYear(new Date(2000, 1, 29))).toBe(true);
        expect(isLeapYear(new Date(2004, 1, 29))).toBe(true);
        expect(isLeapYear(new Date(2008, 1, 29))).toBe(true);
        expect(isLeapYear(new Date(2012, 1, 29))).toBe(true);
        expect(isLeapYear(new Date(2016, 1, 29))).toBe(true);
        expect(isLeapYear(new Date(2020, 1, 29))).toBe(true);
        expect(isLeapYear(new Date(2024, 1, 29))).toBe(true);
        expect(isLeapYear(new Date(2028, 1, 29))).toBe(true);
    });

    test('returns false if the year of date is not a leap year', () => {
        expect(isLeapYear(new Date(2001, 1, 28))).toBe(false);
        expect(isLeapYear(new Date(2005, 1, 28))).toBe(false);
        expect(isLeapYear(new Date(2009, 1, 28))).toBe(false);
        expect(isLeapYear(new Date(2013, 1, 28))).toBe(false);
        expect(isLeapYear(new Date(2017, 1, 28))).toBe(false);
        expect(isLeapYear(new Date(2021, 1, 28))).toBe(false);
        expect(isLeapYear(new Date(2025, 1, 28))).toBe(false);
        expect(isLeapYear(new Date(2029, 1, 28))).toBe(false);
    });

    test('throws the error if value is invalid', () => {
        expect(() => isLeapYear('2017')).toThrow(INVALID_DATE);
    });
});
