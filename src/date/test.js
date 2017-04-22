import { expect } from 'chai';
import date, { add, clearTime, clone, difference, format, isDate, isValid } from '.';

describe('doremi/date', () => {
    it('Imports doremi/date as object', () => {
        expect(date).to.be.an('object');
    });

    it('doremi/date has correct properies', () => {
        expect(date.add).to.equal(add);
        expect(date.clearTime).to.equal(clearTime);
        expect(date.clone).to.equal(clone);
        expect(date.difference).to.equal(difference);
        expect(date.format).to.equal(format);
        expect(date.isDate).to.equal(isDate);
        expect(date.isValid).to.equal(isValid);
    });
});
