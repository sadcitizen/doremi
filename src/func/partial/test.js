import { expect } from 'chai';
import sinon from 'sinon';
import partial from '.';

describe('func/partial()', () => {
    it('Return new function', () => {
        const fn = sinon.spy();
        const partialFn = partial(fn);

        expect(partialFn).to.be.a('function');
    });

    it('Partially apply arguments to a function', () => {
        const fn = (a, b, c, d, e) => [ a, b, c, d, e ];

        const partialFn = partial(fn, 1, 'string', true);
        const result = partialFn(3, false);

        expect(result).to.deep.equal([1, 'string', true, 3, false]);
    });
});
