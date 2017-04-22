import { expect } from 'chai';
import sinon from 'sinon';
import defer from '.';

describe('func/defer()', () => {
    it('Return a new function', () => {
        expect(defer(sinon.spy(), 100)).to.be.a('function');
    });

    it('Return a new function that invoked at the end of the event loop', () => {
        const timer = sinon.useFakeTimers();
        const fn = sinon.spy();
        const deferred = defer(fn);

        deferred();
        expect(fn.notCalled).to.be.true;

        timer.tick(1);
        expect(fn.calledOnce).to.be.true;

        timer.restore();
	});

    it('Apply arguments', done => {
        let counter = 0;
        const increment = x => counter += x;
        const deferredIncrement = defer(increment);

        deferredIncrement(10);
        deferredIncrement(10);
        expect(counter).to.equal(0);

        setTimeout(() => {
            expect(counter).to.equal(20);
            done();
        }, 50);
    });
});
