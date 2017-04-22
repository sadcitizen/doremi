import { expect } from 'chai';
import sinon from 'sinon';
import before from '.';

describe('func/before()', () => {
    it('Returns a new function', () => {
        expect(before(sinon.spy(), 5)).to.be.a('function');
    });

    it('Do not execute the function after 2 calls', () => {
        const add = (x, y) => x + y;
        const addThreeTimes = before(add, 3);

        expect(addThreeTimes(1, 1)).to.equal(2);
        expect(addThreeTimes(2, 2)).to.equal(4);
        expect(addThreeTimes(3, 3)).to.equal(4);
        expect(addThreeTimes(4, 4)).to.equal(4);
    });
});
