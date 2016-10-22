import { expect } from 'chai';
import clone from '.';

describe('datetime/clone()', function () {
    it('Return a date', function () {
        expect(clone(new Date())).to.be.instanceof(Date);
    });

    it('The cloned date should be equal to original date', function () {
        const orig = new Date();
        const cloned = clone(orig);

        expect(orig).to.deep.equal(cloned);
    });
});
