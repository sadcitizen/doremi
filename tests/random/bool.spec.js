'use strict';

import chai from 'chai';
import bool from '../../src/random/bool';
import type from '../../src/is/type';

const expect = chai.expect;

describe('random/bool()', () => {
    it('Should return boolean', () => {
        expect(type(bool())).to.equal('boolean');
    });
});