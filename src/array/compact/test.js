import { expect } from 'chai';
import compact from '.';

describe('array/compact()', () => {
    it('Return array without null or undefined', () => {
        expect(compact([0, 1, false, 2, null, 3, undefined, '', 'null'])).to.deep.equal([0, 1, false, 2, 3, '', 'null']);
        expect(compact([null, undefined])).to.deep.equal([]);
    });

    it('Return empty array if source is empty array', () => {
        expect(compact([])).to.deep.equal([]);
    });
});
