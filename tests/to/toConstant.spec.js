'use strict';

import chai from 'chai';
import toConstant from '../../src/to/toConstant';

const expect = chai.expect;

describe('to/toConstant()', () => {
    it('Should return new function that returns a value', () => {
        const hi = toConstant('hi');
        expect(hi()).to.equal('hi');
        expect(hi('bye')).to.equal('hi');
        expect(hi.call({})).to.equal('hi');
    });

    it('Should work with objects', () => {
        const obj = { a: 'b', c: 'd' };
        const fn = toConstant(obj);

        expect(fn()).to.equal(obj);
    });
});