import add from '.';

describe('date/add()', () => {
    test('adds years to the date', () => {
        const date = new Date(2015, 0, 1);

        expect(add(date, 1, 'year')).toEqual(new Date(2016, 0, 1));
        expect(add(date, 2, 'year')).toEqual(new Date(2017, 0, 1));
        expect(add(date, 1, 'Y')).toEqual(new Date(2016, 0, 1));
    });

    test('subtracts years if count is negative', () => {
        const date = new Date(2015, 0, 1);

        expect(add(date, -1, 'year')).toEqual(new Date(2014, 0, 1));
        expect(add(date, -2, 'year')).toEqual(new Date(2013, 0, 1));
        expect(add(date, -1, 'Y')).toEqual(new Date(2014, 0, 1));
    });

    test('adds months to the date', () => {
        const date = new Date(2015, 0, 1);

        expect(add(date, 1, 'month')).toEqual(new Date(2015, 1, 1));
        expect(add(date, 2, 'month')).toEqual(new Date(2015, 2, 1));
        expect(add(date, 1, 'M')).toEqual(new Date(2015, 1, 1));
    });

    test('works with tail of month', () => {
        const jan31 = new Date(2015, 0, 31);
        const feb28 = new Date(2015, 1, 28);

        expect(add(jan31, 1, 'month')).toEqual(feb28);
    });

    test('works with tail of month of a leap year', () => {
        const jan31 = new Date(2016, 0, 31);
        const feb29 = new Date(2016, 1, 29);

        expect(add(jan31, 1, 'month')).toEqual(feb29);
    });

    test('subtracts months if count is negative', () => {
        const date = new Date(2015, 0, 1);

        expect(add(date, -1, 'month')).toEqual(new Date(2014, 11, 1));
        expect(add(date, -2, 'month')).toEqual(new Date(2014, 10, 1));
        expect(add(date, -1, 'M')).toEqual(new Date(2014, 11, 1));
    });

    test('adds days to the date', () => {
        const date = new Date(2015, 0, 1);

        expect(add(date, 1, 'day')).toEqual(new Date(2015, 0, 2));
        expect(add(date, 2, 'day')).toEqual(new Date(2015, 0, 3));
        expect(add(date, 40, 'day')).toEqual(new Date(2015, 1, 10));
        expect(add(date, 1, 'D')).toEqual(new Date(2015, 0, 2));
    });

    test('subtracts days if count is negative', () => {
        const date = new Date(2015, 0, 1);

        expect(add(date, -1, 'day')).toEqual(new Date(2014, 11, 31));
        expect(add(date, -2, 'day')).toEqual(new Date(2014, 11, 30));
        expect(add(date, -1, 'D')).toEqual(new Date(2014, 11, 31));
    });

    test('adds hours to the date', () => {
        const date = new Date(2015, 0, 1, 0);

        expect(add(date, 10, 'hour')).toEqual(new Date(2015, 0, 1, 10));
        expect(add(date, 70, 'hour')).toEqual(new Date(2015, 0, 3, 22));
        expect(add(date, 10, 'h')).toEqual(new Date(2015, 0, 1, 10));
    });

    test('subtracts hours if count is negative', () => {
        const date = new Date(2015, 0, 1, 0);

        expect(add(date, -10, 'hour')).toEqual(new Date(2014, 11, 31, 14));
        expect(add(date, -70, 'hour')).toEqual(new Date(2014, 11, 29, 2));
        expect(add(date, -10, 'h')).toEqual(new Date(2014, 11, 31, 14));
    });

    test('adds minutes to the date', () => {
        const date = new Date(2015, 0, 1, 0, 0);

        expect(add(date, 10, 'minute')).toEqual(new Date(2015, 0, 1, 0, 10));
        expect(add(date, 70, 'minute')).toEqual(new Date(2015, 0, 1, 1, 10));
        expect(add(date, 10, 'm')).toEqual(new Date(2015, 0, 1, 0, 10));
    });

    test('subtract minutes if count is negative', () => {
        const date = new Date(2015, 0, 1, 0, 0);

        expect(add(date, -10, 'minute')).toEqual(new Date(2014, 11, 31, 23, 50));
        expect(add(date, -70, 'minute')).toEqual(new Date(2014, 11, 31, 22, 50));
        expect(add(date, -10, 'm')).toEqual(new Date(2014, 11, 31, 23, 50));
    });

    test('adds seconds to the date', () => {
        const date = new Date(2015, 0, 1, 0, 0, 0);

        expect(add(date, 10, 'second')).toEqual(new Date(2015, 0, 1, 0, 0, 10));
        expect(add(date, 70, 'second')).toEqual(new Date(2015, 0, 1, 0, 1, 10));
        expect(add(date, 10, 's')).toEqual(new Date(2015, 0, 1, 0, 0, 10));
    });

    test('subtracts seconds if count is negative', () => {
        const date = new Date(2015, 0, 1, 0, 0, 0);

        expect(add(date, -10, 'second')).toEqual(new Date(2014, 11, 31, 23, 59, 50));
        expect(add(date, -70, 'second')).toEqual(new Date(2014, 11, 31, 23, 58, 50));
        expect(add(date, -10, 's')).toEqual(new Date(2014, 11, 31, 23, 59, 50));
    });

    test('adds milliseconds to the date', () => {
        const date = new Date(2015, 0, 1, 0, 0, 0, 0);

        expect(add(date, 100, 'millisecond')).toEqual(new Date(2015, 0, 1, 0, 0, 0, 100));
        expect(add(date, 1200, 'millisecond')).toEqual(new Date(2015, 0, 1, 0, 0, 1, 200));
        expect(add(date, 100, 'ms')).toEqual(new Date(2015, 0, 1, 0, 0, 0, 100));
    });

    test('subtracts milliseconds if count is negative', () => {
        const date = new Date(2015, 0, 1, 0, 0, 0, 0);

        expect(add(date, -100, 'millisecond')).toEqual(new Date(2014, 11, 31, 23, 59, 59, 900));
        expect(add(date, -1200, 'millisecond')).toEqual(new Date(2014, 11, 31, 23, 59, 58, 800));
        expect(add(date, -100, 'ms')).toEqual(new Date(2014, 11, 31, 23, 59, 59, 900));
    });

    test('throws exception if date is invalid', () => {
        expect(() => add(new Date('Invalid date'), 1, 'M')).toThrow('A valid date is expected');
    });

    test('throws exception if time unit is invalid', () => {
        expect(() => add(new Date(2015, 0, 1), 1, 'quarter')).toThrow('"quarter" is invalid time unit');
    });
});
