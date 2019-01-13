import identity from '../../func/identity';
import sumBy from '../sum-by';

/**
 * Calculates average of all values in the array produced by `iteratee` applied to each element in the array.
 *
 * @memberOf array
 * @param {Array} array The array to calculate.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {number} The average value.
 */
export default (array, iteratee = identity) => sumBy(array, iteratee) / array.length;
