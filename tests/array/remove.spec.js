'use strict';

import { expect } from 'chai';
import remove from '../../src/array/remove';

describe.only('array/remove()', function () {
    it('Should modify the array and return removed elements', () => {
        const target = [1, 2, 3, 4, 5, 6];
        const result = remove(target, x => x % 2 === 0);

        expect(target).to.deep.equal([1, 3, 5]);
        expect(result).to.deep.equal([2, 4, 6]);
    });

    it('Should not modify the array if predicate returns false for all elements', () => {
        const target = [1, 2, 3, 4, 5, 6];
        const result = remove(target, x => !Boolean(x));

        expect(target).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('Should returns empty arrays for empty arrays', () => {
        const target = [];
        const result = remove(target, x => x % 2 === 0);

        expect(target).to.deep.equal([]);
        expect(result).to.deep.equal([]);
    });

    it('Should treat `null` or `undefined` as empty array', () => {
        const truthy = x => Boolean(x);

        expect(remove(null, truthy)).to.deep.equal([]);
        expect(remove(void 0, truthy)).to.deep.equal([]);
    });
});
