import endOf from '.';

describe('date/endOf()', () => {
    let date;

    beforeAll(() => {
        date = new Date(2015, 2, 23, 16, 20, 11, 491);
    });

    test('returns end of the year', () => {
        expect(endOf(date, 'year')).toEqual(new Date(2015, 11, 31, 23, 59, 59, 999));
        expect(endOf(date, 'Y')).toEqual(new Date(2015, 11, 31, 23, 59, 59, 999));
    });

    test('returns end of the month', () => {
        expect(endOf(date, 'month')).toEqual(new Date(2015, 2, 31, 23, 59, 59, 999));
        expect(endOf(date, 'M')).toEqual(new Date(2015, 2, 31, 23, 59, 59, 999));
    });

    test('returns end of the day', () => {
        expect(endOf(date, 'day')).toEqual(new Date(2015, 2, 23, 23, 59, 59, 999));
        expect(endOf(date, 'D')).toEqual(new Date(2015, 2, 23, 23, 59, 59, 999));
    });

    test('returns end of the hour', () => {
        expect(endOf(date, 'hour')).toEqual(new Date(2015, 2, 23, 16, 59, 59, 999));
        expect(endOf(date, 'h')).toEqual(new Date(2015, 2, 23, 16, 59, 59, 999));
    });

    test('returns end of the minute', () => {
        expect(endOf(date, 'minute')).toEqual(new Date(2015, 2, 23, 16, 20, 59, 999));
        expect(endOf(date, 'm')).toEqual(new Date(2015, 2, 23, 16, 20, 59, 999));
    });

    test('returns end of the second', () => {
        expect(endOf(date, 'second')).toEqual(new Date(2015, 2, 23, 16, 20, 11, 999));
        expect(endOf(date, 's')).toEqual(new Date(2015, 2, 23, 16, 20, 11, 999));
    });

    test('throws exception if date is invalid', () => {
        expect(() => endOf(new Date('Invalid date'), 'M')).toThrow('A valid date is expected');
    });

    test('throws exception if time unit is invalid', () => {
        expect(() => endOf(date, 'quarter')).toThrow('"quarter" is invalid time unit');
    });
});