import { expect } from 'chai';
import func, { after, before, compose, defer, delay, flip, identity, isFunction, memoize, negate, noop, once, partial, partialRight, pipe } from '.';

describe('doremi/func', () => {
    it('Imports doremi/func as object', () => {
        expect(func).to.be.an('object');
    });

    it('doremi/func has correct properies', () => {
        expect(func.after).to.equal(after);
        expect(func.before).to.equal(before);
        expect(func.compose).to.equal(compose);
        expect(func.defer).to.equal(defer);
        expect(func.delay).to.equal(delay);
        expect(func.flip).to.equal(flip);
        expect(func.identity).to.equal(identity);
        expect(func.isFunction).to.equal(isFunction);
        expect(func.memoize).to.equal(memoize);
        expect(func.negate).to.equal(negate);
        expect(func.noop).to.equal(noop);
        expect(func.once).to.equal(once);
        expect(func.partial).to.equal(partial);
        expect(func.partialRight).to.equal(partialRight);
        expect(func.pipe).to.equal(pipe);
    });
});
