'use strict';

import chai from 'chai';
import clone from '../../src/datetime/clone';

const expect = chai.expect;

describe.only('datetime/clone()', function () {
    it('Should return a date', function () {
        expect(clone(new Date())).to.be.instanceof(Date);
    });

    it('The cloned date should be equal to original date', function () {
        const orig = new Date();
        const cloned = clone(orig);

        expect(orig).to.deep.equal(cloned);
    });
});
