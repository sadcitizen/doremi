import { expect } from 'chai';
import sinon from 'sinon';
import after from '.';

describe('func/after()', () => {
    it('Returns a new function', () => {
        expect(after(sinon.spy(), 2)).to.be.a('function');
    });

    it('Executes the function after 5 calls', () => {
        const fn = sinon.spy();
        const afterFiveTimes = after(fn, 5);

        afterFiveTimes();
        expect(fn.called).to.be.false;

        afterFiveTimes();
        expect(fn.called).to.be.false;

        afterFiveTimes();
        expect(fn.called).to.be.false;

        afterFiveTimes();
        expect(fn.called).to.be.false;

        afterFiveTimes();
        expect(fn.called).to.be.true;
    });

    it('Apply arguments', () => {
        const fn = sinon.spy();
        const afterTwoTimes = after(fn, 2);

        afterTwoTimes();
        afterTwoTimes('hi!');
        expect(fn.calledWith('hi!')).to.be.true;
    });
});
