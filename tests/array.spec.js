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
        it('Should return array without null or undefined', function () {
            expect(arr.compact([0, 1, false, 2, null, 3, undefined, '', 'null'])).to.deep.equal([0, 1, false, 2, 3, '', 'null']);
            expect(arr.compact([null, undefined])).to.deep.equal([]);
        });

        it('Should return empty array if source is empty array', function () {
            expect(arr.compact([])).to.deep.equal([]);
        });
    });

    describe('.contains()', function () {
        var target;

        before(function () {
            target = [1, 2, 3, 4];
        });

        it('Should return true if array contains value', function () {
            expect(arr.contains(target, 1)).to.equal(true);
            expect(arr.contains(target, 2)).to.equal(true);
            expect(arr.contains(target, 3)).to.equal(true);
            expect(arr.contains(target, 4)).to.equal(true);
        });

        it('Should return false if array does not contain value', function () {
            expect(arr.contains(target, 5)).to.equal(false);
            expect(arr.contains(target, 6)).to.equal(false);
            expect(arr.contains(target, 7)).to.equal(false);
        });

        it('Should work with empty arrays', function () {
            expect(arr.contains([], 1)).to.equal(false);
            expect(arr.contains([], null)).to.equal(false);
        });

        it('Should start search at given index', function () {
            expect(arr.contains(target, 1, 0)).to.equal(true);
            expect(arr.contains(target, 1, 1)).to.equal(false);
            expect(arr.contains(target, 4, 3)).to.equal(true);
            expect(arr.contains(target, 4, 300)).to.equal(false);
        });

        it('Should treat negative index as zero', function () {
            expect(arr.contains(target, 4, -1)).to.equal(true);
            expect(arr.contains(target, 2, -9)).to.equal(true);
            expect(arr.contains(target, 5, -10)).to.equal(false);
            expect(arr.contains(target, 2, -1)).to.equal(false);
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