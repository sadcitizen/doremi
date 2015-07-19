'use strict';

import chai from 'chai';
import append from '../../src/array/append';

const expect = chai.expect;

describe('array/append()', function () {
    it('Should be ok', function () {
        var target = [1, 2, 3],
            source = [4, 5, 6];

        expect(append([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
        expect(append(target, source)).to.equal(target);
    });
});