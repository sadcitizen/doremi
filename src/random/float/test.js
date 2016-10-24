'use strict';

import chai from 'chai';
import float from '.';
import isFloat from '../../number/is-float';

const expect = chai.expect;

describe('random/float()', () => {
    let floated, range, fix;

    before(() => {
        floated = float();
        range = float(0.113, 94.378);
        fix = float(0, 10, 3);
    });

    it('Should return a float', () => {
        expect(isFloat(floated)).to.equal(true);
        expect(isFloat(range)).to.equal(true);
        expect(isFloat(fix)).to.equal(true);
    });

    it('Should return an float inside range', () => {
        expect(range > 0.113 && range < 94.378).to.equal(true);
        expect(fix > 0 && fix < 10).to.equal(true);
    });

    it('Should return an float with less than 3 digits after point', () => {
        expect(('' + fix).split('.')[1].length).to.be.at.most(3);
        expect(('' + float(0, 10, 3)).split('.')[1].length).to.be.at.most(3);
        expect(('' + float(0, 100, 3)).split('.')[1].length).to.be.at.most(3);
    });
});
