/**
 * Checks if the given property name exists as own property of `target`.
 *
 * @param target The object to check.
 * @param key The name of property to check.
 * @returns {*} Returns `true` if `target` has own property with name 'key', else `false`.
 *
 * @example
 *
 * var obj = { a: 'b', c: 'd' };
 *
 * ob.hasOwn(obj, 'a');
 * // => true
 *
 * ob.hasOwn(obj, 'e');
 * // => false
 *
 * ob.hasOwn(obj, 'toString');
 * // => false
 */
function hasOwn(target, key) {
    return Object.prototype.hasOwnProperty.call(target, key);
}

export default hasOwn;