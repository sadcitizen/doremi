import { expect } from 'chai';
import or from '.';

describe('logic/or()', () => {
    it('Returns true if at least one condition is truthy', () => {
        expect(or(true)).to.be.true;
        expect(or(true, false)).to.be.true;
        expect(or(true, false, true)).to.be.true;
        expect(or(true, false, true, true)).to.be.true;
        expect(or(true, false, true, true, false)).to.be.true;
        expect(or(true, false, true, false, true, true)).to.be.true;
    });

    it('Returns false if all conditions is falsy', () => {
        expect(or(false)).to.be.false;
        expect(or(false, false)).to.be.false;
        expect(or(false, false, false)).to.be.false;
        expect(or(false, false, false, false)).to.be.false;
        expect(or(false, false, false, false, false)).to.be.false;
        expect(or(false, false, false, false, false, false)).to.be.false;
    });

    it('Returns false if conditions is empty', () => {
        expect(or()).to.be.false;
    });
});
