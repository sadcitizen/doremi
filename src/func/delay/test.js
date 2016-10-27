import { expect } from 'chai';
import sinon from 'sinon';
import delay from '.';

describe('func/delay()', () => {
    it('Return new function', () => {
        expect(delay(sinon.spy(), 100)).to.be.a('function');
    });

    it('return new function that invoked after 50 milliseconds', () => {
        const timer = sinon.useFakeTimers();
        const fn = sinon.spy();
        const delayed = delay(fn, 50);

        delayed();

        timer.tick(49);
        expect(fn.notCalled).to.be.true;

        timer.tick(1);
        expect(fn.calledOnce).to.be.true;

        timer.restore();
	});
});
