import difference from '.';

describe('date/difference()', () => {
    test('returns difference in years', () => {
        const date = new Date(2000, 0);
        const twoYearsAfter = new Date(2002, 0);

        expect(difference(date, date, 'year')).toBe(0);
        expect(difference(date, date, 'Y')).toBe(0);

        expect(difference(date, twoYearsAfter, 'year')).toBe(2);
        expect(difference(date, twoYearsAfter, 'Y')).toBe(2);
    });

    test('returns difference in months', () => {
        const date = new Date(2000, 0);
        const yearAfter = new Date(2001, 0);

        expect(difference(date, date, 'month')).toBe(0);
        expect(difference(date, date, 'M')).toBe(0);

        expect(difference(date, yearAfter, 'month')).toBe(12);
        expect(difference(date, yearAfter, 'M')).toBe(12);
    });

    // test('returns difference in weeks', () => {
    //     const date = new Date(2000, 0, 1);
    //     const nextWeek = new Date(2000, 0, 8);
    //
    //     expect(difference(date, date, 'week')).toBe(0);
    //     expect(difference(date, nextWeek, 'W')).toBe(1);
    // });

    test('returns difference in days', () => {
        const date = new Date(2000, 0, 1);
        const oneDayAfter = new Date(2000, 0, 2);
        const monthAfter = new Date(2000, 1, 1);

        expect(difference(date, date, 'day')).toBe(0);
        expect(difference(date, date, 'D')).toBe(0);

        expect(difference(date, oneDayAfter, 'day')).toBe(1);
        expect(difference(date, oneDayAfter, 'D')).toBe(1);

        expect(difference(date, monthAfter, 'day')).toBe(31);
        expect(difference(date, monthAfter, 'D')).toBe(31);
    });

    test('returns difference in seconds', () => {
        const date = new Date(2000, 0, 1, 0, 0, 0, 0);
        const secondAfter = new Date(2000, 0, 1, 0, 0, 1, 0);

        expect(difference(date, date, 'second')).toBe(1);
        expect(difference(date, date, 's')).toBe(1);

        expect(difference(date, secondAfter, 'second')).toBe(1);
        expect(difference(date, secondAfter, 's')).toBe(1);
    });

    // test('returns difference in millisecond', () => {
    //     const date = new Date(2000, 0, 1, 0, 0, 0, 0);
    //     const nextSecond = new Date(2000, 0, 1, 0, 0, 1, 0);
    //
    //     expect(difference(date, nextSecond, 'millisecond')).toBe(1000);
    //     expect(difference(date, nextSecond, 'ms')).toBe(1000);
    // });
    //
    // test('defaults to milliseconds when unit is undefined', () => {
    //     const date = new Date(2000, 0, 1, 0, 0, 0, 0);
    //     const nextSecond = new Date(2000, 0, 1, 0, 0, 1, 0);
    //
    //     expect(difference(date, nextSecond)).toBe(1000);
    // });
    //
    // test('rounds results', () => {
    //     const date = new Date(2000, 0, 1);
    //     const dayAndSomeMore = new Date(2000, 0, 2, 11);
    //     const almostTwoDaysAfter = new Date(2000, 0, 2, 21);
    //     const yearAndSomeMore = new Date(2001, 4, 16);
    //
    //     expect(difference(date, dayAndSomeMore, 'd')).toBe(1);
    //     expect(difference(date, almostTwoDaysAfter, 'd')).toBe(2);
    //     expect(difference(date, dayAndSomeMore, 'y')).toBe(0);
    //     expect(difference(date, yearAndSomeMore, 'y')).toBe(1);
    // });
    //
    // test('returns negative difference result', () => {
    //     const date = new Date(2000, 0, 1);
    //     const oneDayMore = new Date(2000, 0, 2);
    //     const nextMonth = new Date(2000, 1, 1);
    //
    //     expect(difference(oneDayMore, date, 'd')).toBe(-1);
    //     expect(difference(nextMonth, date, 'd')).toBe(-31);
    // });
    //
    // test('throws on unknown unit', () => {
    //     const d = new Date();
    //     expect(difference.bind(this, d, d, 'cheese!&')).toThrow();
    // });
    //
    // test('throws on undefined args', () => {
    //     const d = new Date();
    //     expect(difference.bind(this, d)).toThrow();
    //     expect(difference.bind(this)).toThrow();
    // });
});
