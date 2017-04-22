import { expect } from 'chai';
import array, { append, at, compact, countBy, distinct, equals, first, flatten, groupBy, last, max, min, partition, prepend, remove, sortBy, sum, union, update } from '.';

describe('doremi/array', () => {
    it('Imports doremi/array as object', () => {
        expect(array).to.be.an('object');
    });

    it('doremi/array has correct properies', () => {
        expect(array.append).to.equal(append);
        expect(array.at).to.equal(at);
        expect(array.compact).to.equal(compact);
        expect(array.countBy).to.equal(countBy);
        expect(array.distinct).to.equal(distinct);
        expect(array.equals).to.equal(equals);
        expect(array.first).to.equal(first);
        expect(array.flatten).to.equal(flatten);
        expect(array.groupBy).to.equal(groupBy);
        expect(array.last).to.equal(last);
        expect(array.max).to.equal(max);
        expect(array.min).to.equal(min);
        expect(array.partition).to.equal(partition);
        expect(array.prepend).to.equal(prepend);
        expect(array.remove).to.equal(remove);
        expect(array.sortBy).to.equal(sortBy);
        expect(array.sum).to.equal(sum);
        expect(array.union).to.equal(union);
        expect(array.update).to.equal(update);
    });
});
