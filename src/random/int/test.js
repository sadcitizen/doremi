import { expect } from 'chai';
import randomInteger from '.';
import isInteger from '../../number/is-int';

describe('random/int()', () => {
    let num, range;

    before(() => {
        num = randomInteger();
        range = randomInteger(0, 1000);
    });

    it('Should return a integer', () => {
        expect(isInteger(num)).to.equal(true);
        expect(isInteger(range)).to.equal(true);
    });

    it('Should return an integer inside range', () => {
        expect(range > 0 && range < 1000).to.equal(true);
    });
});
