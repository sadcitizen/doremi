import identity from '../../func/identity';
import sum from '../sum-by';

/**
 * @param {Array} array
 * @param {Function} iteratee
 * @returns {number}
 */
export default (array, iteratee = identity) => sum(array, iteratee) / array.length;
