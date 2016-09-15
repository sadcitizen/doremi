'use strict';

import { expect } from 'chai';
import add from '../../src/date/add';


describe('date/add()', () => {
    it('add years', () => {
        expect(add(new Date(2015, 0, 1), 1, 'years')).to.deep.equal(new Date(2016, 0, 1));
        expect(add(new Date(2015, 0, 1), 2, 'years')).to.deep.equal(new Date(2017, 0, 1));
        expect(add(new Date(2015, 0, 1), 1, 'Y')).to.deep.equal(new Date(2016, 0, 1));
    });

    it('subtract years if count is negative', () => {
        expect(add(new Date(2015, 0, 1), -1, 'years')).to.deep.equal(new Date(2014, 0, 1));
        expect(add(new Date(2015, 0, 1), -2, 'years')).to.deep.equal(new Date(2013, 0, 1));
        expect(add(new Date(2015, 0, 1), -1, 'Y')).to.deep.equal(new Date(2014, 0, 1));
    });

    it('add months', () => {
        expect(add(new Date(2015, 0, 1), 1, 'months')).to.deep.equal(new Date(2015, 1, 1));
        expect(add(new Date(2015, 0, 1), 2, 'months')).to.deep.equal(new Date(2015, 2, 1));
        expect(add(new Date(2015, 0, 1), 1, 'M')).to.deep.equal(new Date(2015, 1, 1));
    });

    it('work with tail of month', () => {
        const jan31 = new Date(2015, 0, 31);
        const feb28 = new Date(2015, 1, 28);

        expect(add(jan31, 1, 'months')).to.deep.equal(feb28);
    });

    it('work with tail of month of leap year', () => {
        const jan31 = new Date(2016, 0, 31);
        const feb29 = new Date(2016, 1, 29);

        expect(add(jan31, 1, 'months')).to.deep.equal(feb29);
    });

    it('subtract months if count is negative', () => {
        expect(add(new Date(2015, 0, 1), -1, 'months')).to.deep.equal(new Date(2014, 11, 1));
        expect(add(new Date(2015, 0, 1), -2, 'months')).to.deep.equal(new Date(2014, 10, 1));
        expect(add(new Date(2015, 0, 1), -1, 'M')).to.deep.equal(new Date(2014, 11, 1));
    });

    it('add days', () => {
        expect(add(new Date(2015, 0, 1), 1, 'days')).to.deep.equal(new Date(2015, 0, 2));
        expect(add(new Date(2015, 0, 1), 2, 'days')).to.deep.equal(new Date(2015, 0, 3));
        expect(add(new Date(2015, 0, 1), 40, 'days')).to.deep.equal(new Date(2015, 1, 10));
        expect(add(new Date(2015, 0, 1), 1, 'D')).to.deep.equal(new Date(2015, 0, 2));
    });

    it('subtract days if count is negative', () => {
        expect(add(new Date(2015, 0, 1), -1, 'days')).to.deep.equal(new Date(2014, 11, 31));
        expect(add(new Date(2015, 0, 1), -2, 'days')).to.deep.equal(new Date(2014, 11, 30));
        expect(add(new Date(2015, 0, 1), -1, 'D')).to.deep.equal(new Date(2014, 11, 31));
    });

    it('add hours', () => {
        expect(add(new Date(2015, 0, 1, 0), 10, 'hours')).to.deep.equal(new Date(2015, 0, 1, 10));
        expect(add(new Date(2015, 0, 1, 0), 70, 'hours')).to.deep.equal(new Date(2015, 0, 3, 22));
        expect(add(new Date(2015, 0, 1, 0), 10, 'h')).to.deep.equal(new Date(2015, 0, 1, 10));
    });

    it('subtract hours if count is negative', () => {
        expect(add(new Date(2015, 0, 1, 0), -10, 'hours')).to.deep.equal(new Date(2014, 11, 31, 14));
        expect(add(new Date(2015, 0, 1, 0), -70, 'hours')).to.deep.equal(new Date(2014, 11, 29, 2));
        expect(add(new Date(2015, 0, 1, 0), -10, 'h')).to.deep.equal(new Date(2014, 11, 31, 14));
    });

    it('add minutes', () => {
        expect(add(new Date(2015, 0, 1, 0, 0), 10, 'minutes')).to.deep.equal(new Date(2015, 0, 1, 0, 10));
        expect(add(new Date(2015, 0, 1, 0, 0), 70, 'minutes')).to.deep.equal(new Date(2015, 0, 1, 1, 10));
        expect(add(new Date(2015, 0, 1, 0, 0), 10, 'm')).to.deep.equal(new Date(2015, 0, 1, 0, 10));
    });

    it('subtract minutes if count is negative', () => {
        expect(add(new Date(2015, 0, 1, 0, 0), -10, 'minutes')).to.deep.equal(new Date(2014, 11, 31, 23, 50));
        expect(add(new Date(2015, 0, 1, 0, 0), -70, 'minutes')).to.deep.equal(new Date(2014, 11, 31, 22, 50));
        expect(add(new Date(2015, 0, 1, 0, 0), -10, 'm')).to.deep.equal(new Date(2014, 11, 31, 23, 50));
    });

    it('add seconds', () => {
        expect(add(new Date(2015, 0, 1, 0, 0, 0), 10, 'seconds')).to.deep.equal(new Date(2015, 0, 1, 0, 0, 10));
        expect(add(new Date(2015, 0, 1, 0, 0, 0), 70, 'seconds')).to.deep.equal(new Date(2015, 0, 1, 0, 1, 10));
        expect(add(new Date(2015, 0, 1, 0, 0, 0), 10, 's')).to.deep.equal(new Date(2015, 0, 1, 0, 0, 10));
    });

    it('subtract seconds if count is negative', () => {
        expect(add(new Date(2015, 0, 1, 0, 0, 0), -10, 'seconds')).to.deep.equal(new Date(2014, 11, 31, 23, 59, 50));
        expect(add(new Date(2015, 0, 1, 0, 0, 0), -70, 'seconds')).to.deep.equal(new Date(2014, 11, 31, 23, 58, 50));
        expect(add(new Date(2015, 0, 1, 0, 0, 0), -10, 's')).to.deep.equal(new Date(2014, 11, 31, 23, 59, 50));
    });

    it('add milliseconds', () => {
        expect(add(new Date(2015, 0, 1, 0, 0, 0, 0), 100, 'milliseconds')).to.deep.equal(new Date(2015, 0, 1, 0, 0, 0, 100));
        expect(add(new Date(2015, 0, 1, 0, 0, 0, 0), 1200, 'milliseconds')).to.deep.equal(new Date(2015, 0, 1, 0, 0, 1, 200));
        expect(add(new Date(2015, 0, 1, 0, 0, 0, 0), 100, 'ms')).to.deep.equal(new Date(2015, 0, 1, 0, 0, 0, 100));
    });

    it('subtract milliseconds if count is negative', () => {
        expect(add(new Date(2015, 0, 1, 0, 0, 0, 0), -100, 'milliseconds')).to.deep.equal(new Date(2014, 11, 31, 23, 59, 59, 900));
        expect(add(new Date(2015, 0, 1, 0, 0, 0, 0), -1200, 'milliseconds')).to.deep.equal(new Date(2014, 11, 31, 23, 59, 58, 800));
        expect(add(new Date(2015, 0, 1, 0, 0, 0, 0), -100, 'ms')).to.deep.equal(new Date(2014, 11, 31, 23, 59, 59, 900));
    });
});
