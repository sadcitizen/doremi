import { expect } from 'chai';
import countBy from '.';

describe('array/countBy()', () => {
    it('Returns counted elements of the array by value', () => {
        const value = [1, 2, 3, 3, 2, 4];

        expect(countBy(value)).to.deep.equal({ '1': 1, '2': 2, '3': 2, '4': 1 });
    });

    it('Returns empty object for empty array', () => {
        expect(countBy([])).to.deep.equal({});
    });

    it('Allows custom iterator', () => {
        const cities = [{ name: 'Moscow' }, { name: 'London' }, { name: 'Tokyo' }, { name: 'Paris' }, { name: 'Berlin' }];

        expect(countBy(cities, city => city.name.length)).to.deep.equal({ '5': 2, '6': 3 });
    });
});
