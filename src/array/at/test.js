import { expect } from 'chai';
import at from '.';

describe('array/at()', function () {
    it('Returns an array of elements corresponding to the given indexes', () => {
        var array = [1, 2, 3, 4, 5];
        
        expect(at(array)).to.equal(undefined);
        expect(at(array, 0)).to.equal(1);
        expect(at(array, -1)).to.equal(5);
        expect(at(array, 0, -1, 1)).to.deep.equal([1, 5, 2]);
        expect(at(array, [0, -1, 1])).to.deep.equal([1, 5, 2]);
        expect(at(array, [0, -6, 6])).to.deep.equal([1, undefined, undefined]);
        expect(at(array, [])).to.deep.equal([]);
    });
});
