import { expect } from 'chai';
import difference from '.';

describe('date/difference()', () => {
    it('returns difference in years', () => {
        const from = new Date(2000, 0);
        const twoYearsAgo = new Date(2002, 0);

        expect(difference(from, from, 'years')).to.be.equal(0);
        expect(difference(from, twoYearsAgo, 'y')).to.be.equal(2);
    });

    it('returns difference in months', () => {
        const from = new Date(2000, 0);
        const nextYear = new Date(2001, 0);

        expect(difference(from, from, 'months')).to.be.equal(0);
        expect(difference(from, nextYear, 'M')).to.be.equal(12);
    });

    it('returns difference in weeks', () => {
        const from = new Date(2000, 0, 1);
        const nextWeek = new Date(2000, 0, 8);

        expect(difference(from, from, 'weeks')).to.be.equal(0);
        expect(difference(from, nextWeek, 'w')).to.be.equal(1);
    });

    it('returns difference in days', () => {
        const from = new Date(2000, 0, 1);
        const oneDayMore = new Date(2000, 0, 2);
        const nextMonth = new Date(2000, 1, 1);

        expect(difference(from, from, 'days')).to.be.equal(0);
        expect(difference(from, oneDayMore, 'd')).to.be.equal(1);
        expect(difference(from, nextMonth, 'days')).to.be.equal(31);
    });

    it('returns difference in seconds', () => {
        const from = new Date(2000, 0, 1, 0, 0, 0, 0);
        const nextSecond = new Date(2000, 0, 1, 0, 0, 1, 0);

        expect(difference(from, nextSecond, 'seconds')).to.be.equal(1);
        expect(difference(from, nextSecond, 's')).to.be.equal(1);
    });

    it('returns difference in milliseconds', () => {
        const from = new Date(2000, 0, 1, 0, 0, 0, 0);
        const nextSecond = new Date(2000, 0, 1, 0, 0, 1, 0);

        expect(difference(from, nextSecond, 'milliseconds')).to.be.equal(1000);
        expect(difference(from, nextSecond, 'ms')).to.be.equal(1000);
    });

    it('defaults to milliseconds when unit is undefined', () => {
        const from = new Date(2000, 0, 1, 0, 0, 0, 0);
        const nextSecond = new Date(2000, 0, 1, 0, 0, 1, 0);

        expect(difference(from, nextSecond)).to.be.equal(1000);
    });

    it('rounds results', () => {
        const from = new Date(2000, 0, 1);
        const dayAndSomeMore = new Date(2000, 0, 2, 11);
        const almostTwoDaysAfter = new Date(2000, 0, 2, 21);
        const yearAndSomeMore = new Date(2001, 4, 16);

        expect(difference(from, dayAndSomeMore, 'd')).to.be.equal(1);
        expect(difference(from, almostTwoDaysAfter, 'd')).to.be.equal(2);
        expect(difference(from, dayAndSomeMore, 'y')).to.be.equal(0);
        expect(difference(from, yearAndSomeMore, 'y')).to.be.equal(1);
    });

    it('returns negative difference result', () => {
        const from = new Date(2000, 0, 1);
        const oneDayMore = new Date(2000, 0, 2);
        const nextMonth = new Date(2000, 1, 1);

        expect(difference(oneDayMore, from, 'd')).to.be.equal(-1);
        expect(difference(nextMonth, from, 'd')).to.be.equal(-31);
    });

    it('throws on unknown unit', () => {
        const d = new Date()
        expect(difference.bind(this, d, d, 'cheese!&')).to.throw();
    });

    it('throws on undefined args', () => {
        const d = new Date()
        expect(difference.bind(this, d)).to.throw();
        expect(difference.bind(this)).to.throw();
    });
});
