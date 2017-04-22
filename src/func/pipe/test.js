import { expect } from 'chai';
import sinon from 'sinon';
import pipe from '.';

describe('func/pipe()', () => {
    const f1 = sinon.spy();
    const f2 = sinon.spy();
    const f3 = sinon.spy();
    const piped = pipe(f1, f2, f3);

    it('Return new function', () => {
        expect(piped).to.be.a('function');
    });

    it('Call all provided functions', () => {
        piped();
        expect(f1.called).to.equal(true);
        expect(f2.called).to.equal(true);
        expect(f3.called).to.equal(true);
    });

    it('Return result of invoking the provided functions', () => {
        const f1 = n => n + 1;
        const f2 = n => n * 2;
        const f3 = n => n - 3;

        expect(pipe(f1)(1)).to.equal(2);
        expect(pipe(f1, f2)(1)).to.equal(4);
        expect(pipe(f1, f2, f3)(1)).to.equal(1);
    });
});
