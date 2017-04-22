import { expect } from 'chai';
import min from '.';

describe('array/min()', () => {
    it('Returns the element with lowest value', () => {
        expect(min([1, 2, 3, 4, 5])).to.equal(1);
        expect(min([1, -2, 3, 4, -5])).to.equal(-5);
    });

    it('Returns NaN if the array is empty', () => {
        expect(min([])).to.be.NaN;
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

        expect(min(guests, x => x.age)).to.deep.equal({ name: 'Bill', age: 21 });
        expect(min(guests, x => x.name.length)).to.deep.equal({ name: 'Bill', age: 21 });
    });
});
