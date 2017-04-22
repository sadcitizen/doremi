import { expect } from 'chai';
import partition from '.';

describe('array/partition()', () => {
    const target = [5, -5, 4, -4, 3, -3, 2, -2, 1, -1];

    it('Splits the array by sign', () => {
        const [posititiveValues, negativeValues] = partition(target, x => x > 0);

        expect(posititiveValues).to.deep.equal([5, 4, 3, 2, 1]);
        expect(negativeValues).to.deep.equal([-5, -4, -3, -2, -1]);
    });

    it('Uses "identity" as default predicate', () => {
        const [trues, falses] = partition([true, false, true, true, false]);

        expect(trues).to.deep.equal([true, true, true]);
        expect(falses).to.deep.equal([false, false]);
    });
});
