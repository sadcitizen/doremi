import { expect } from 'chai';
import isEmpty from '.';

describe('string/isEmpty()', () => {
    it('Returns true for an empty string', () => {
        expect(isEmpty('')).to.equal(true);
    });

    it('Returns false for other strings', () => {
        expect(isEmpty('hello')).to.equal(false);
        expect(isEmpty('apple, orange')).to.equal(false);
        expect(isEmpty(JSON.stringify({ a: [1, 2, 3, 4], b: { c: 'd' } }))).to.equal(false);
    });
});
