'use strict';

import chai from 'chai';
import guid from '../../src/random/guid';

const expect = chai.expect;

describe('random/guid()', () => {
    it('Guid should be guid', () => {
        expect(guid()).to.match(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[ab89][a-f0-9]{3}-[a-f0-9]{12}/);
    });

    it('Guids should be unique', () => {
        const firstGuid = guid();
        const secondGuid = guid();

        expect(firstGuid).to.not.equal(secondGuid);
    });
});