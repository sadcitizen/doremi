import { expect } from 'chai';
import diff from '.';

describe('date/diff()', () => {
    it('returns diff in years', () => {
        const from = new Date(2000, 0);
        const twoYearsAgo = new Date(2002, 0);

        expect(diff(from, from, 'years')).to.be.equal(0);
        expect(diff(from, twoYearsAgo, 'y')).to.be.equal(2);
    });

    it('returns diff in months', () => {
        const from = new Date(2000, 0);
        const nextYear = new Date(2001, 0);

        expect(diff(from, from, 'months')).to.be.equal(0);
        expect(diff(from, nextYear, 'M')).to.be.equal(12);
    });

    it('returns diff in weeks', () => {
        const from = new Date(2000, 0, 1);
        const nextWeek = new Date(2000, 0, 8);

        expect(diff(from, from, 'weeks')).to.be.equal(0);
        expect(diff(from, nextWeek, 'w')).to.be.equal(1);
    });

    it('returns diff in days', () => {
        const from = new Date(2000, 0, 1);
        const oneDayMore = new Date(2000, 0, 2);
        const nextMonth = new Date(2000, 1, 1);

        expect(diff(from, from, 'days')).to.be.equal(0);
        expect(diff(from, oneDayMore, 'd')).to.be.equal(1);
        expect(diff(from, nextMonth, 'days')).to.be.equal(31);
    });

    it('returns diff in seconds', () => {
        const from = new Date(2000, 0, 1, 0, 0, 0, 0);
        const nextSecond = new Date(2000, 0, 1, 0, 0, 1, 0);

        expect(diff(from, nextSecond, 'seconds')).to.be.equal(1);
        expect(diff(from, nextSecond, 's')).to.be.equal(1);
    });

    it('returns diff in milliseconds', () => {
        const from = new Date(2000, 0, 1, 0, 0, 0, 0);
        const nextSecond = new Date(2000, 0, 1, 0, 0, 1, 0);

        expect(diff(from, nextSecond, 'milliseconds')).to.be.equal(1000);
        expect(diff(from, nextSecond, 'ms')).to.be.equal(1000);
    });

    it('defaults to milliseconds when unit is undefined', () => {
        const from = new Date(2000, 0, 1, 0, 0, 0, 0);
        const nextSecond = new Date(2000, 0, 1, 0, 0, 1, 0);

        expect(diff(from, nextSecond)).to.be.equal(1000);
    });

    it('rounds results', () => {
        const from = new Date(2000, 0, 1);
        const dayAndSomeMore = new Date(2000, 0, 2, 11);
        const almostTwoDaysAfter = new Date(2000, 0, 2, 21);
        const yearAndSomeMore = new Date(2001, 4, 16);

        expect(diff(from, dayAndSomeMore, 'd')).to.be.equal(1);
        expect(diff(from, almostTwoDaysAfter, 'd')).to.be.equal(2);
        expect(diff(from, dayAndSomeMore, 'y')).to.be.equal(0);
        expect(diff(from, yearAndSomeMore, 'y')).to.be.equal(1);
    });

    it('returns negative diff result', () => {
        const from = new Date(2000, 0, 1);
        const oneDayMore = new Date(2000, 0, 2);
        const nextMonth = new Date(2000, 1, 1);

        expect(diff(oneDayMore, from, 'd')).to.be.equal(-1);
        expect(diff(nextMonth, from, 'd')).to.be.equal(-31);
    });

    it('throws on unknown unit', () => {
        const d = new Date()
        expect(diff.bind(this, d, d, 'cheese!&')).to.throw();
    });

    it('throws on undefined args', () => {
        const d = new Date()
        expect(diff.bind(this, d)).to.throw();
        expect(diff.bind(this)).to.throw();
    });
});
