import { expect } from 'chai';
import max from '.';

describe('array/max()', () => {
    it('Returns the element with greatest value', () => {
        expect(max([1, 2, 3, 4, 5])).to.equal(5);
        expect(max([1, -2, 3, 4, -5])).to.equal(4);
    });

    it('Returns NaN if the array is empty', () => {
        expect(max([])).to.be.NaN;
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

        expect(max(guests, x => x.age)).to.deep.equal({ name: 'Donald', age: 30 });
        expect(max(guests, x => x.name.length)).to.deep.equal({ name: 'Hillary', age: 22 });
    });
});
