import { INVALID_DATE, INVALID_TIME_UNIT } from '../../constants/errors';
import startOf from '.';

describe('date/startOf()', () => {
    let date;

    beforeAll(() => {
        date = new Date(2015, 2, 23, 23, 20, 11, 491);
    });

    test('returns start of the year', () => {
        expect(startOf(date, 'year')).toEqual(new Date(2015, 0, 1, 0, 0, 0, 0));
        expect(startOf(date, 'Y')).toEqual(new Date(2015, 0, 1, 0, 0, 0, 0));
    });

    test('returns start of the month', () => {
        expect(startOf(date, 'month')).toEqual(new Date(2015, 2, 1, 0, 0, 0, 0));
        expect(startOf(date, 'M')).toEqual(new Date(2015, 2, 1, 0, 0, 0, 0));
    });

    test('returns start of the day', () => {
        expect(startOf(date, 'day')).toEqual(new Date(2015, 2, 23, 0, 0, 0, 0));
        expect(startOf(date, 'D')).toEqual(new Date(2015, 2, 23, 0, 0, 0, 0));
    });

    test('returns start of the hour', () => {
        expect(startOf(date, 'hour')).toEqual(new Date(2015, 2, 23, 23, 0, 0, 0));
        expect(startOf(date, 'h')).toEqual(new Date(2015, 2, 23, 23, 0, 0, 0));
    });

    test('returns start of the minute', () => {
        expect(startOf(date, 'minute')).toEqual(new Date(2015, 2, 23, 23, 20, 0, 0));
        expect(startOf(date, 'm')).toEqual(new Date(2015, 2, 23, 23, 20, 0, 0));
    });

    test('returns start of the second', () => {
        expect(startOf(date, 'second')).toEqual(new Date(2015, 2, 23, 23, 20, 11, 0));
        expect(startOf(date, 's')).toEqual(new Date(2015, 2, 23, 23, 20, 11, 0));
    });

    test('throws exception if date is invalid', () => {
        expect(() => startOf(new Date('Invalid date'), 'M')).toThrow(INVALID_DATE);
    });

    test('throws exception if time unit is invalid', () => {
        expect(() => startOf(date, 'quarter')).toThrow(INVALID_TIME_UNIT);
    });
});
