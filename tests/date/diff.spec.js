'use strict';

import { expect } from 'chai';
import diff from '../../src/date/diff';

const createDate = (year, month, day) => new Date(Date.UTC(year, month, day));

describe('date/diff()', () => {
    it('in days', () => {
    	const from = createDate(2000, 0, 1);
    	const oneDayMore = createDate(2000, 0, 2);
    	const nextMonth = createDate(2000, 1, 1);

        expect(diff(from, from, 'day')).to.be.equal(0);
        expect(diff(from, oneDayMore, 'days')).to.be.equal(1);
        expect(diff(from, nextMonth, 'day')).to.be.equal(31);
    });

    it('in weeks', () => {
    	const from = createDate(2000, 0, 1);
    	const nextWeek = createDate(2000, 0, 8);

        expect(diff(from, from, 'weeks')).to.be.equal(0);
        expect(diff(from, nextWeek, 'weeks')).to.be.equal(1);
    });
});
