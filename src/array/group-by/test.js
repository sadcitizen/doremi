import { expect } from 'chai';
import groupBy from '.';

describe('array/groupBy()', () => {
    it('Returns grouped elements of the array by value', () => {
        const value = [1, 2, 3, 3, 2, 4];

        expect(groupBy(value)).to.deep.equal({ '1': [1], '2': [2, 2], '3': [3, 3], '4': [4] });
    });

    it('Returns empty object for empty array', () => {
        expect(groupBy([])).to.deep.equal({});
    });

    it('Allows custom iterator', () => {
        const cities = [{ name: 'Moscow' }, { name: 'London' }, { name: 'Tokyo' }, { name: 'Paris' }, { name: 'Berlin' }];

        expect(groupBy(cities, city => city.name.length)).to.deep.equal({
            '5': [{ name: 'Tokyo'}, { name: 'Paris' }],
            '6': [{ name: 'Moscow' }, { name: 'London' }, { name: 'Berlin' }]
        });
    });
});
