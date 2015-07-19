import type from './type';
var primitives = ['boolean', 'number', 'string', 'undefined', 'null'];

/**
 * Checks if `target` is a primitive value.
 * Primitive values are booleans, numbers, strings, `undefined` and `null`.
 * Equivalent object wrappers for primitive values are also primitive.
 *
 * @param target The value to check.
 * @returns {boolean} Returns `true` if `target` is a primitive, else `false`.
 *
 * @example
 *
 * isPrimitive(42);
 * // => true
 *
 * isPrimitive([]);
 * // => false
 */
export default target => primitives.indexOf(type(target)) !== -1;