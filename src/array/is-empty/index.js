import isDefined from '../../common/is-defined';

/**
 * Checks if the given array is 'null', `undefined` or zero length.
 *
 * @category array
 * @param {*} array The array to check.
 * @returns {boolean} Return `true` if the array is `null`, `undefined` or empty, else `false`.
 */
export default array => !isDefined(array) || array.length === 0;
