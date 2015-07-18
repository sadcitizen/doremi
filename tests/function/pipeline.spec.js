'use strict';

import chai from 'chai';
import sinon from 'sinon';
import pipeline from '../../src/function/pipeline';

const expect = chai.expect;

describe('function/pipeline()', () => {
    const f1 = sinon.spy();
    const f2 = sinon.spy();
    const f3 = sinon.spy();
    const pipelined = pipeline(f1, f2, f3);

    it('Should return new function', () => {
        expect(pipelined).to.be.a('function');
    });

    it('Should call all provided functions', () => {
        pipelined();
        expect(f1.called).to.equal(true);
        expect(f2.called).to.equal(true);
        expect(f3.called).to.equal(true);
    });

    it('Should return result of invoking the provided functions', () => {
        const f1 = n => n + 1;
        const f2 = n => n * 2;
        const f3 = n => n - 3;

        expect(pipeline(f1)(1)).to.equal(2);
        expect(pipeline(f1, f2)(1)).to.equal(4);
        expect(pipeline(f1, f2, f3)(1)).to.equal(1);
    });
});