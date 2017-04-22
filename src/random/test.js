import { expect } from 'chai';
import random, { bool, choice, float, guid, hex, int } from '.';

describe('doremi/random', () => {
    it('Imports doremi/random as object', () => {
        expect(random).to.be.an('object');
    });

    it('doremi/random has correct properies', () => {
        expect(random.bool).to.equal(bool);
        expect(random.choice).to.equal(choice);
        expect(random.float).to.equal(float);
        expect(random.guid).to.equal(guid);
        expect(random.hex).to.equal(hex);
        expect(random.int).to.equal(int);
    });
});
