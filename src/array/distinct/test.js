import 'babel-polyfill';
import { expect } from 'chai';
import distinct from '.';

describe('array/distinct()', () => {
    it('Return distinct elements from an array', () => {
        const target = [1, 2, 1, 3, 1, 4];
        const expected = [1, 2, 3, 4];

        expect(distinct(target)).to.deep.equal(expected);
    });

    it('Allow getter to determine equality', () => {
        const target = [{name: 'Casper'}, {name: 'Richard'}, {name: 'Casper'}];
        const expected = [{name: 'Casper'}, {name: 'Richard'}];
        const getter = i => i.name;

        expect(distinct(target, getter)).to.deep.equal(expected);
    });
});
