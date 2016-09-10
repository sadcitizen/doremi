'use strict';

import chai from 'chai';
import noop from '../../src/function/noop';
import isFunction from '../../src/is/is-function';

const expect = chai.expect;

describe('function/noop()', () => {
    it('Should be a function', () => {
        expect(isFunction(noop)).to.equal(true);
    });

    it('Should return undefined', () => {
        expect(noop()).to.equal(undefined);
    });
});