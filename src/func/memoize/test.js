import { expect } from 'chai';
import sinon from 'sinon';
import memoize from '.';

describe.only('func/memoize()', () => {
    it('Returns a new function', () => {
        expect(memoize(sinon.spy(), 100)).to.be.a('function');
    });

    it('Memoizes functions', () => {
        const sum = sinon.stub();
        sum.withArgs(2, 2).returns(4);
        sum.withArgs(3, 3).returns(6);

        const square = sinon.stub();
        square.withArgs(3, 3).returns(9);

        const memoizedSum = memoize(sum);
        expect(memoizedSum(2, 2)).to.equal(4);
        expect(memoizedSum(2, 2)).to.equal(4);
        expect(memoizedSum(2, 2)).to.equal(4);

        expect(sum.calledOnce).to.be.true;

        expect(memoizedSum(3, 3)).to.equal(6);

        expect(sum.calledTwice).to.be.true;

        const memoizedSquare = memoize(square);
        expect(memoizedSquare(3, 3)).to.equal(9);
        expect(memoizedSquare(3, 3)).to.equal(9);
        expect(memoizedSquare(3, 3)).to.equal(9);

        expect(square.calledOnce).to.be.true;

    });
});
