import { expect } from 'chai';
import clearTime from '.';

describe('date/clearTime()', () => {
    it('Return date with clear time', () => {
        const date = new Date(2016, 0, 1, 10, 26, 38, 100);
        const clearedDate = new Date(2016, 0, 1, 0, 0, 0, 0);

        expect(clearTime(date)).to.deep.equal(clearedDate);
    });
});
