'use strict';

import chai from 'chai';
import compact from '../../src/array/compact';

const expect = chai.expect;

describe('array/compact()', () => {
    it('Should return array without null or undefined', () => {
        expect(compact([0, 1, false, 2, null, 3, undefined, '', 'null'])).to.deep.equal([0, 1, false, 2, 3, '', 'null']);
        expect(compact([null, undefined])).to.deep.equal([]);
    });

    it('Should return empty array if source is empty array', () => {
        expect(compact([])).to.deep.equal([]);
    });
});