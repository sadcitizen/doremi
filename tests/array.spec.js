var arr = require('../build/array.min');
var expect = require('chai').expect;

describe('Array', function () {
    describe('.append()', function () {
        it('Should be ok', function () {
            var target = [1, 2, 3],
                source = [4, 5, 6];

            expect(arr.append([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
            expect(arr.append(target, source)).to.equal(target);
        });
    });

    describe('.at()', function () {
        it('Should be ok', function () {
            var array = [1, 2, 3, 4, 5];
            expect(arr.at(array)).to.equal(undefined);
            expect(arr.at(array, 0)).to.equal(1);
            expect(arr.at(array, -1)).to.equal(5);
            expect(arr.at(array, 0, -1, 1)).to.deep.equal([1, 5, 2]);
            expect(arr.at(array, [0, -1, 1])).to.deep.equal([1, 5, 2]);
            expect(arr.at(array, [0, -6, 6])).to.deep.equal([1, undefined, undefined]);
            expect(arr.at(array, [])).to.deep.equal([]);
        });
    });

    describe('.compact()', function () {
        it('Should be ok', function () {
            var array = [0, 1, false, 2, '', 3];
            expect(arr.compact(array)).to.deep.equal([1, 2, 3]);
        });
    });

    describe('.first()', function () {
        it('Should be ok', function () {
            var array = [1, 2, 3, 4, 5];
            expect(arr.first(array)).to.equal(1);
            expect(arr.first(array, 1)).to.equal(1);
            expect(arr.first(array, 2)).to.deep.equal([1, 2]);
            expect(arr.first(array, 3)).to.deep.equal([1, 2, 3]);
            expect(arr.first(array, 4)).to.deep.equal([1, 2, 3, 4]);
            expect(arr.first(array, 5)).to.deep.equal([1, 2, 3, 4, 5]);
            expect(arr.first(array, 6)).to.deep.equal([1, 2, 3, 4, 5]);
        });
    });

    describe('.flatten()', function () {
        it('Should be ok', function () {
            expect(arr.flatten([1, [2], [3, [[4]]]])).to.deep.equal([1, 2, 3, 4]);
            expect(arr.flatten([1, [2], [3, [[4]]]], false)).to.deep.equal([1, 2, 3, [[4]]]);
        });
    });

    describe('.last()', function () {
        it('Should be ok', function () {
            var array = [1, 2, 3, 4, 5];
            expect(arr.last(array)).to.equal(5);
            expect(arr.last(array, 1)).to.equal(5);
            expect(arr.last(array, 2)).to.deep.equal([4, 5]);
            expect(arr.last(array, 3)).to.deep.equal([3, 4, 5]);
            expect(arr.last(array, 4)).to.deep.equal([2, 3, 4, 5]);
            expect(arr.last(array, 5)).to.deep.equal([1, 2, 3, 4, 5]);
            expect(arr.last(array, 7)).to.deep.equal([1, 2, 3, 4, 5]);
        });
    });
});