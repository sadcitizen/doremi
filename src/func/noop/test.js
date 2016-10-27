import { expect } from 'chai';
import noop from '.';

describe('func/noop()', () => {
    it('Be a function', () => {
        expect(noop).to.be.a('function');
    });

    it('Return undefined', () => {
        expect(noop()).to.equal(undefined);
    });
});
