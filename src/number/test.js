import { expect } from 'chai';
import number, { abbreviate, ceil, fixed, floor, isEven, isFloat, isInt, isNumber, isOdd, log, round } from '.';

describe('doremi/number', () => {
    it('Imports doremi/number as object', () => {
        expect(number).to.be.an('object');
    });

    it('doremi/number has correct properies', () => {
        expect(number.abbreviate).to.equal(abbreviate);
        expect(number.ceil).to.equal(ceil);
        expect(number.fixed).to.equal(fixed);
        expect(number.floor).to.equal(floor);
        expect(number.isEven).to.equal(isEven);
        expect(number.isFloat).to.equal(isFloat);
        expect(number.isInt).to.equal(isInt);
        expect(number.isNumber).to.equal(isNumber);
        expect(number.isOdd).to.equal(isOdd);
        expect(number.log).to.equal(log);
        expect(number.round).to.equal(round);
    });
});
