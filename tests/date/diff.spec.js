'use strict';

import { expect } from 'chai';
import diff from '../../src/date/diff';

const createDate = () => new Date(Date.UTC(...arguments))

describe('date/diff()', () => {
    it('in days', function () {
    	const from = createDate(2000, 0, 1)
    	const oneDayMore = createDate(2000, 0, 2)
    	const nextMonth = createDate(2000, 1, 1)

        expect(diff(from, from, 'days')).to.be.equal(0);
        expect(diff(from, oneDayMore, 'days')).to.be.equal(1);
        expect(diff(from, nextMonth, 'days')).to.be.equal(31);
    });
});
