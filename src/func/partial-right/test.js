import { expect } from 'chai';
import sinon from 'sinon';
import partialRight from '.';

describe('function/partialRight()', () => {
    it('Return new function', () => {
        const fn = sinon.spy();
        const partialFn = partialRight(fn);

        expect(partialFn).to.be.a('function');
    });

    it('Partially apply arguments to a function', () => {
        const fn = (a, b, c, d, e) => [ a, b, c, d, e ];

        const partialFn = partialRight(fn, 1, 'string', true);
        const result = partialFn(3, false);

        expect(result).to.deep.equal([3, false, 1, 'string', true]);
    });
});
