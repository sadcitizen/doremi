import difference from '.';

describe('date/difference()', () => {
    test('returns difference in years', () => {
        const from = new Date(2000, 0);
        const twoYearsAgo = new Date(2002, 0);

        expect(difference(from, from, 'years')).toBe(0);
        expect(difference(from, twoYearsAgo, 'y')).toBe(2);
    });

    test('returns difference in months', () => {
        const from = new Date(2000, 0);
        const nextYear = new Date(2001, 0);

        expect(difference(from, from, 'months')).toBe(0);
        expect(difference(from, nextYear, 'M')).toBe(12);
    });

    test('returns difference in weeks', () => {
        const from = new Date(2000, 0, 1);
        const nextWeek = new Date(2000, 0, 8);

        expect(difference(from, from, 'weeks')).toBe(0);
        expect(difference(from, nextWeek, 'w')).toBe(1);
    });

    test('returns difference in days', () => {
        const from = new Date(2000, 0, 1);
        const oneDayMore = new Date(2000, 0, 2);
        const nextMonth = new Date(2000, 1, 1);

        expect(difference(from, from, 'days')).toBe(0);
        expect(difference(from, oneDayMore, 'd')).toBe(1);
        expect(difference(from, nextMonth, 'days')).toBe(31);
    });

    test('returns difference in seconds', () => {
        const from = new Date(2000, 0, 1, 0, 0, 0, 0);
        const nextSecond = new Date(2000, 0, 1, 0, 0, 1, 0);

        expect(difference(from, nextSecond, 'seconds')).toBe(1);
        expect(difference(from, nextSecond, 's')).toBe(1);
    });

    test('returns difference in milliseconds', () => {
        const from = new Date(2000, 0, 1, 0, 0, 0, 0);
        const nextSecond = new Date(2000, 0, 1, 0, 0, 1, 0);

        expect(difference(from, nextSecond, 'milliseconds')).toBe(1000);
        expect(difference(from, nextSecond, 'ms')).toBe(1000);
    });

    test('defaults to milliseconds when unit is undefined', () => {
        const from = new Date(2000, 0, 1, 0, 0, 0, 0);
        const nextSecond = new Date(2000, 0, 1, 0, 0, 1, 0);

        expect(difference(from, nextSecond)).toBe(1000);
    });

    test('rounds results', () => {
        const from = new Date(2000, 0, 1);
        const dayAndSomeMore = new Date(2000, 0, 2, 11);
        const almostTwoDaysAfter = new Date(2000, 0, 2, 21);
        const yearAndSomeMore = new Date(2001, 4, 16);

        expect(difference(from, dayAndSomeMore, 'd')).toBe(1);
        expect(difference(from, almostTwoDaysAfter, 'd')).toBe(2);
        expect(difference(from, dayAndSomeMore, 'y')).toBe(0);
        expect(difference(from, yearAndSomeMore, 'y')).toBe(1);
    });

    test('returns negative difference result', () => {
        const from = new Date(2000, 0, 1);
        const oneDayMore = new Date(2000, 0, 2);
        const nextMonth = new Date(2000, 1, 1);

        expect(difference(oneDayMore, from, 'd')).toBe(-1);
        expect(difference(nextMonth, from, 'd')).toBe(-31);
    });

    test('throws on unknown unit', () => {
        const d = new Date();
        expect(difference.bind(this, d, d, 'cheese!&')).toThrow();
    });

    test('throws on undefined args', () => {
        const d = new Date();
        expect(difference.bind(this, d)).toThrow();
        expect(difference.bind(this)).toThrow();
    });
});
