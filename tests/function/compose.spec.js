'use strict';

import chai from 'chai';
import sinon from 'sinon';
import compose from '../../src/func/compose';

const expect = chai.expect;

describe('function/compose()', () => {
    const f1 = sinon.spy();
    const f2 = sinon.spy();
    const f3 = sinon.spy();
    const composed = compose(f1, f2, f3);

    it('Should return new function', () => {
        expect(composed).to.be.a('function');
    });

    it('Should call all provided functions', () => {
        composed();
        expect(f1.called).to.equal(true);
        expect(f2.called).to.equal(true);
        expect(f3.called).to.equal(true);
    });

    it('Should return result of invoking the provided functions', () => {
        const f1 = n => n + 1;
        const f2 = n => n * 2;
        const f3 = n => n - 3;

        expect(compose(f1)(1)).to.equal(2);
        expect(compose(f2, f1)(1)).to.equal(4);
        expect(compose(f3, f2, f1)(1)).to.equal(1);
    });
});