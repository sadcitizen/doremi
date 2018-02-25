import { expect } from 'chai';
import parse from '.';

describe.only('date/parse()', () => {
    it('Returns a clone of the given date', () => {
        const dirty = new Date(2000, 0, 1);
        const date = parse(dirty);

        expect(date).to.deep.equal(new Date(2000, 0, 1));
    });
});
