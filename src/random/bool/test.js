import { expect } from 'chai';
import bool from '.';

describe('random/bool()', () => {
    it('Return boolean', () => {
        expect(bool()).to.be.a('boolean');
    });
});
