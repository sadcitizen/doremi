import identity from '../../func/identity';

/**
 * @param {Array} array
 * @param {Function} [iteratee]
 * @return {number|NaN}
 */
export default (array, iteratee = identity) => array.reduce((total, item) => total + iteratee(item), 0);
