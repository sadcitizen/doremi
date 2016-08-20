'use strict';

import chai from 'chai';
import distinct from '../../src/array/distinct';

const expect = chai.expect;

describe('array/distinct()', () => {

    it('Should return distinct elements from an array', () => {
        const target = [1, 2, 1, 3, 1, 4];
        const expected = [1, 2, 3, 4];

        expect(distinct(target)).to.deep.equal(expected);
    });

    it('Should use getter to determine equality', () => {
        const target = [{name: 'Casper'}, {name: 'Richard'}, {name: 'Casper'}];
        const expected = [{name: 'Casper'}, {name: 'Richard'}];
        const getter = i => i.name;

        expect(distinct(target, getter)).to.deep.equal(expected);
    });
});
