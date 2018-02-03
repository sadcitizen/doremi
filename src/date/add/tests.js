import add from '.';

describe('date/add()', () => {
    test('add years', () => {
        expect(add(new Date(2015, 0, 1), 1, 'years')).toEqual(new Date(2016, 0, 1));
        expect(add(new Date(2015, 0, 1), 2, 'years')).toEqual(new Date(2017, 0, 1));
        expect(add(new Date(2015, 0, 1), 1, 'Y')).toEqual(new Date(2016, 0, 1));
    });

    test('subtract years if count is negative', () => {
        expect(add(new Date(2015, 0, 1), -1, 'years')).toEqual(new Date(2014, 0, 1));
        expect(add(new Date(2015, 0, 1), -2, 'years')).toEqual(new Date(2013, 0, 1));
        expect(add(new Date(2015, 0, 1), -1, 'Y')).toEqual(new Date(2014, 0, 1));
    });

    test('add months', () => {
        expect(add(new Date(2015, 0, 1), 1, 'months')).toEqual(new Date(2015, 1, 1));
        expect(add(new Date(2015, 0, 1), 2, 'months')).toEqual(new Date(2015, 2, 1));
        expect(add(new Date(2015, 0, 1), 1, 'M')).toEqual(new Date(2015, 1, 1));
    });

    test('work with tail of month', () => {
        const jan31 = new Date(2015, 0, 31);
        const feb28 = new Date(2015, 1, 28);

        expect(add(jan31, 1, 'months')).toEqual(feb28);
    });

    test('work with tail of month of leap year', () => {
        const jan31 = new Date(2016, 0, 31);
        const feb29 = new Date(2016, 1, 29);

        expect(add(jan31, 1, 'months')).toEqual(feb29);
    });

    test('subtract months if count is negative', () => {
        expect(add(new Date(2015, 0, 1), -1, 'months')).toEqual(new Date(2014, 11, 1));
        expect(add(new Date(2015, 0, 1), -2, 'months')).toEqual(new Date(2014, 10, 1));
        expect(add(new Date(2015, 0, 1), -1, 'M')).toEqual(new Date(2014, 11, 1));
    });

    test('add days', () => {
        expect(add(new Date(2015, 0, 1), 1, 'days')).toEqual(new Date(2015, 0, 2));
        expect(add(new Date(2015, 0, 1), 2, 'days')).toEqual(new Date(2015, 0, 3));
        expect(add(new Date(2015, 0, 1), 40, 'days')).toEqual(new Date(2015, 1, 10));
        expect(add(new Date(2015, 0, 1), 1, 'D')).toEqual(new Date(2015, 0, 2));
    });

    test('subtract days if count is negative', () => {
        expect(add(new Date(2015, 0, 1), -1, 'days')).toEqual(new Date(2014, 11, 31));
        expect(add(new Date(2015, 0, 1), -2, 'days')).toEqual(new Date(2014, 11, 30));
        expect(add(new Date(2015, 0, 1), -1, 'D')).toEqual(new Date(2014, 11, 31));
    });

    test('add hours', () => {
        expect(add(new Date(2015, 0, 1, 0), 10, 'hours')).toEqual(new Date(2015, 0, 1, 10));
        expect(add(new Date(2015, 0, 1, 0), 70, 'hours')).toEqual(new Date(2015, 0, 3, 22));
        expect(add(new Date(2015, 0, 1, 0), 10, 'h')).toEqual(new Date(2015, 0, 1, 10));
    });

    test('subtract hours if count is negative', () => {
        expect(add(new Date(2015, 0, 1, 0), -10, 'hours')).toEqual(new Date(2014, 11, 31, 14));
        expect(add(new Date(2015, 0, 1, 0), -70, 'hours')).toEqual(new Date(2014, 11, 29, 2));
        expect(add(new Date(2015, 0, 1, 0), -10, 'h')).toEqual(new Date(2014, 11, 31, 14));
    });

    test('add minutes', () => {
        expect(add(new Date(2015, 0, 1, 0, 0), 10, 'minutes')).toEqual(new Date(2015, 0, 1, 0, 10));
        expect(add(new Date(2015, 0, 1, 0, 0), 70, 'minutes')).toEqual(new Date(2015, 0, 1, 1, 10));
        expect(add(new Date(2015, 0, 1, 0, 0), 10, 'm')).toEqual(new Date(2015, 0, 1, 0, 10));
    });

    test('subtract minutes if count is negative', () => {
        expect(add(new Date(2015, 0, 1, 0, 0), -10, 'minutes')).toEqual(new Date(2014, 11, 31, 23, 50));
        expect(add(new Date(2015, 0, 1, 0, 0), -70, 'minutes')).toEqual(new Date(2014, 11, 31, 22, 50));
        expect(add(new Date(2015, 0, 1, 0, 0), -10, 'm')).toEqual(new Date(2014, 11, 31, 23, 50));
    });

    test('add seconds', () => {
        expect(add(new Date(2015, 0, 1, 0, 0, 0), 10, 'seconds')).toEqual(new Date(2015, 0, 1, 0, 0, 10));
        expect(add(new Date(2015, 0, 1, 0, 0, 0), 70, 'seconds')).toEqual(new Date(2015, 0, 1, 0, 1, 10));
        expect(add(new Date(2015, 0, 1, 0, 0, 0), 10, 's')).toEqual(new Date(2015, 0, 1, 0, 0, 10));
    });

    test('subtract seconds if count is negative', () => {
        expect(add(new Date(2015, 0, 1, 0, 0, 0), -10, 'seconds')).toEqual(new Date(2014, 11, 31, 23, 59, 50));
        expect(add(new Date(2015, 0, 1, 0, 0, 0), -70, 'seconds')).toEqual(new Date(2014, 11, 31, 23, 58, 50));
        expect(add(new Date(2015, 0, 1, 0, 0, 0), -10, 's')).toEqual(new Date(2014, 11, 31, 23, 59, 50));
    });

    test('add milliseconds', () => {
        expect(add(new Date(2015, 0, 1, 0, 0, 0, 0), 100, 'milliseconds')).toEqual(new Date(2015, 0, 1, 0, 0, 0, 100));
        expect(add(new Date(2015, 0, 1, 0, 0, 0, 0), 1200, 'milliseconds')).toEqual(new Date(2015, 0, 1, 0, 0, 1, 200));
        expect(add(new Date(2015, 0, 1, 0, 0, 0, 0), 100, 'ms')).toEqual(new Date(2015, 0, 1, 0, 0, 0, 100));
    });

    test('subtract milliseconds if count is negative', () => {
        expect(add(new Date(2015, 0, 1, 0, 0, 0, 0), -100, 'milliseconds')).toEqual(new Date(2014, 11, 31, 23, 59, 59, 900));
        expect(add(new Date(2015, 0, 1, 0, 0, 0, 0), -1200, 'milliseconds')).toEqual(new Date(2014, 11, 31, 23, 59, 58, 800));
        expect(add(new Date(2015, 0, 1, 0, 0, 0, 0), -100, 'ms')).toEqual(new Date(2014, 11, 31, 23, 59, 59, 900));
    });
});
