var type = require('./type');

/**
 * Checks if `target` is an object.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is an object, else 'false'.
 *
 * @example
 *
 * is.object('');
 * // => false
 *
 * is.object({ a: 'b', c: 'd' });
 * // => true
 *
 * is.nan({});
 * // => true
 */
module.exports = function object(target) {
    return type(target) === 'object';
};