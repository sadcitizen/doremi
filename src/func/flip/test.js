import { expect } from 'chai';
import sinon from 'sinon';
import flip from '.';

describe('func/flip()', () => {
    it('Returns a new function', () => {
        expect(flip(sinon.spy())).to.be.a('function');
    });

    it('Reverses the order of arguments', () => {
        const echo = flip((a, b, c) => [a, b, c]);

        expect(echo(1, 2, 3)).to.deep.equal([3, 2, 1]);
    });
});
