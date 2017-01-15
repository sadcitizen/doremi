import 'babel-polyfill';
import { expect } from 'chai';
import distinct from '.';

describe('array/distinct()', () => {
    it('Returns distinct elements from the array', () => {
        const target = [1, 2, 1, 3, 1, 4];
        const expected = [1, 2, 3, 4];

        expect(distinct(target)).to.deep.equal(expected);
    });

    it('Allows getter to determine equality', () => {
        const target = [{
            name: 'Casper'
        }, {
            name: 'Richard'
        }, {
            name: 'Casper'
        }];

        const expected = [{
            name: 'Casper'
        }, {
            name: 'Richard'
        }];

        const iterator = i => i.name;

        expect(distinct(target, iterator)).to.deep.equal(expected);
    });
});
