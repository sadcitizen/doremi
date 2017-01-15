import { expect } from 'chai';
import and from '.';

describe('logic/and()', () => {
    it('Returns true if all conditions is truthy', () => {
        expect(and(true)).to.be.true;
        expect(and(true, true)).to.be.true;
        expect(and(true, true, true)).to.be.true;
        expect(and(true, true, true, true)).to.be.true;
        expect(and(true, true, true, true, true)).to.be.true;
        expect(and(true, true, true, true, true, true)).to.be.true;
    });

    it('Returns false if at least one condition is falsy', () => {
        expect(and(false)).to.be.false;
        expect(and(true, false)).to.be.false;
        expect(and(true, false, true)).to.be.false;
        expect(and(true, false, true, true)).to.be.false;
        expect(and(true, false, true, true, false)).to.be.false;
        expect(and(true, false, true, false, true, true)).to.be.false;
    });

    it('Returns false if conditions is empty', () => {
        expect(and()).to.be.false;
    });
});
