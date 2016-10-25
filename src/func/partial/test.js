import { expect } from 'chai';
import sinon from 'sinon';
import partial from '.';

describe('function/partial()', () => {
    it('Return new function', () => {
        const fnc = sinon.spy();
        const partialFn = partial(fnc);

        expect(partialFn).to.be.a('function');
    });

    it('Partially apply arguments to a function', () => {
        const func = (a, b, c, d, e) => [ a, b, c, d, e ];

        const partialFunc = partial(func, 1, 'string', true);
        const result = partialFunc(3, false);

        expect(result.length).to.equal(5);
        expect(result[0]).to.equal(1);
        expect(result[1]).to.equal('string');
        expect(result[2]).to.equal(true);
        expect(result[3]).to.equal(3);
        expect(result[4]).to.equal(false);
    });
});
