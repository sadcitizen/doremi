import isExists from '../is/isExists';

/**
 * Returns a string representation of `target`.
 *
 * @param {*} target The value to convert.
 * @returns {String} The string representation of `target`.
 *
 * @example
 *
 * toString(123);
 * // => '123'
 *
 * toString(null);
 * // => ''
 *
 * toString(undefined);
 * // => ''
 *
 * toString(/[a-z0-9]/igm);
 * // => '/[a-z0-9]/gim'
 */
//TODO: Array, Object, Date, Function
export default target => !isExists(target) ? '' : target.toString();