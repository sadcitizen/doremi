import { expect } from 'chai';
import sortBy from '.';

describe('array/sortBy()', () => {
    it('Sorts the array numerically', () => {
        expect(sortBy([9, 12, 3, 4, -5, 18])).to.deep.equal([-5, 3, 4, 9, 12, 18]);
    });

    it('Sorts the array alphabetically', () => {
        expect(sortBy(['red', 'green', 'blue'])).to.deep.equal(['blue', 'green', 'red']);
    });

    it('Returns the empty array if source is empty array', () => {
        expect(sortBy([])).to.deep.equal([]);
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

        const sortedByNameLengthGuests = [{
            name: 'Bill',
            age: 21
        }, {
            name: 'Barak',
            age: 25
        }, {
            name: 'Donald',
            age: 30
        }, {
            name: 'Hillary',
            age: 22
        }];

        expect(sortBy(guests, x => x.name.length)).to.deep.equal(sortedByNameLengthGuests);
    });
});
