'use strict';

import chai from 'chai';
import isGuid from '../../src/is/is-guid';

const expect = chai.expect;

describe('is/isGuid()', () => {
    it('Should return true for a guid string', () => {
        expect(isGuid('550e8400-e29b-41d4-a716-446655440000')).to.equal(true);
        expect(isGuid('f47ac10b-58cc-4372-a567-0e02b2c3d479')).to.equal(true);
    });

    it('Should return false for other strings', () => {
        expect(isGuid('')).to.equal(false);
        expect(isGuid('  ')).to.equal(false);
        expect(isGuid('hello')).to.equal(false);
        expect(isGuid('apple, orange')).to.equal(false);
    });
});
