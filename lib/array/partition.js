"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Returns an array of two arrays.
 * The first array is items that return true for the predicate function.
 * The second array is items that return false for the predicate function.
 *
 * @param target {Array} The array to iterate over.
 * @param predicate {Function} The function invoked per iteration.
 * @param ctx {*} The context of `predicate` function.
 * @returns {Array} Returns the array of two arrays.
 *
 * @example
 *
 * partition([1, 2, 3, 4, 5], isEven);
 * // => [[2, 4], [1, 3, 5]]
 *
 * partition([null, false, undefined], Boolean);
 * // => [[], [null, false, undefined]]
 */
function partition(target, predicate, ctx) {
    var pass = [];
    var fail = [];

    target.forEach(function (value, index, target) {
        return (predicate.call(ctx, value, index, target) ? pass : fail).push(value);
    });

    return [pass, fail];
}

exports.default = partition;