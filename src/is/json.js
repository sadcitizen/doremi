/**
 * Checks if `target` is a json string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a json string, else 'false'.
 *
 * @example
 *
 * is.json('');
 * // => false
 *
 * is.json('{"a":"b","c":"d"}');
 * // => true
 *
 * is.json('{}');
 * // => true
 */
module.exports = function json(target) {
    try {
        JSON.parse(target);
    } catch (e) {
        return false;
    }
    return true;
};