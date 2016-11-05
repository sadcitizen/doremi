import { expect } from 'chai';
import log from '.';

describe('number/log()', () => {
    it('Returns logarithm of a number', () => {
        expect(log(2, 2)).to.equal(1);
        expect(log(9, 3)).to.equal(2);
        expect(log(64, 4)).to.equal(3);
        expect(log(10000, 10)).to.equal(4);
    });

    it('Returns logarithm of zero', function() {
        expect(log(0)).to.equal(-Infinity);
    });

    it('Returns logarithm of negative number', function() {
        expect(log(-2, 2)).to.be.NaN;
        expect(log(-9, 3)).to.be.NaN;
        expect(log(-64, 4)).to.be.NaN;
        expect(log(-10000, 10)).to.be.NaN;
    });

    it('Returns logarithm with negative base', function() {
        expect(log(2, -2)).to.be.NaN;
        expect(log(9, -3)).to.be.NaN;
        expect(log(64, -4)).to.be.NaN;
        expect(log(10000, -10)).to.be.NaN;
    });
});
