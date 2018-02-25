import identity from '../../func/identity';

/**
 * Sums all values in the array.
 *
 * @param {Array} target The array of values to sum.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @return {number|NaN} The sum of values.
 *
 * @example
 * sum([1, 2, 3]);
 * // => 6
 *
 * sum(['lorem', 'ipsum', 'sit'], x => x.length);
 * // => 13
 *
 * sum([]);
 * // => 0
 */
export default (target, iteratee = identity) => target.reduce((total, item) => total + iteratee(item), 0);
