var type = require('./type');
var primitives = ['boolean', 'number', 'string', 'undefined', 'null'];

/**
 * Check if `target` is a primitive value.
 * Primitive values are booleans, numbers, strings, `undefined` and `null`.
 * Equivalent object wrappers for primitive values are also primitive.
 *
 * @param target The value to check.
 * @returns {boolean} Returns `true` if `target` is a primitive, else `false`.
 *
 * @example
 *
 * is.primitive(42);
 * // => true
 *
 * is.primitive([]);
 * // => false
 */
module.exports = function primitive(target) {
    return primitives.indexOf(type(target)) !== -1;
};