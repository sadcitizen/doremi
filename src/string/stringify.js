import isDefined from '../common/is-defined';

/**
 * Returns a stringify representation of `target`.
 *
 * @param {*} target The value to convert.
 * @returns {string} The stringify representation of `target`.
 *
 * @example
 *
 * stringify(123);
 * // => '123'
 *
 * stringify(null);
 * // => ''
 *
 * stringify(undefined);
 * // => ''
 *
 * stringify(/[a-z0-9]/igm);
 * // => '/[a-z0-9]/gim'
 */
//TODO: Array, Object, Date, Function
export default target => !isDefined(target) ? '' : target.toString();
