import { expect } from 'chai';
import sum from '.';

describe('array/sum()', () => {
    it('Returns the sum of values', () => {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
        expect(sum([1, -2, 3, 4, -5])).to.equal(1);
    });

    it('Returns NaN if the array is empty', () => {
        expect(sum([])).to.be.NaN;
    });

    it('Allows the custom iterator', () => {
        const guests = [{
            name: 'Bill',
            age: 21
        }, {
            name: 'Hillary',
            age: 22
        }, {
            name: 'Donald',
            age: 30
        }, {
            name: 'Barak',
            age: 25
        }];

        expect(sum(guests, x => x.age)).to.equal(98);
        expect(sum(guests, x => x.name.length)).to.equal(22);
    });
});
