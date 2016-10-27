import { expect } from 'chai';
import identity from '.';

describe('func/identity()', () => {
    it('Return the first argument', () => {
        expect(identity(0)).to.equal(0);
        expect(identity('lorem')).to.equal('lorem');
        expect(identity(null)).to.equal(null);
        expect(identity(true, false)).to.equal(true);
        expect(identity(1, 2, 3, 4, 5)).to.equal(1);
    });
});
