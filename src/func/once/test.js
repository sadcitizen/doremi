import { expect } from 'chai';
import sinon from 'sinon';
import once from '.';

describe('func/once()', () => {
    it('Returns a new function', () => {
        expect(once(sinon.spy())).to.be.a('function');
    });

    it('Execute the function once', () => {
        const add = (x, y) => x + y;
        const addOnce = once(add);

        expect(addOnce(1, 1)).to.equal(2);
        expect(addOnce(2, 2)).to.equal(2);
        expect(addOnce(3, 3)).to.equal(2);
        expect(addOnce(4, 4)).to.equal(2);
        expect(addOnce(5, 5)).to.equal(2);
    });
});
