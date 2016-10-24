import { expect } from 'chai';
import isBlank from '.';

describe('string/isBlank()', () => {
    it('Return true for a blank string', () => {
        expect(isBlank('')).to.equal(true);
        expect(isBlank('       \t \n   ')).to.equal(true);
    });

    it('Return false for other strings', () => {
        expect(isBlank('hello')).to.equal(false);
        expect(isBlank('apple, orange')).to.equal(false);
        expect(isBlank(JSON.stringify({ a: [1, 2, 3, 4], b: { c: 'd' } }))).to.equal(false);
    });
});
