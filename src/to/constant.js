/**
 * Creates a function that returns `value`.
 *
 * @param target The value to return.
 * @returns {Function} Returns new function.
 *
 * @example
 *
 * var num = to.constant(42);
 * num();
 * // => 42
 *
 * var str = to.constant('value');
 * str();
 * // => 'value'
 */
function constant(target) {
    return () => target;
}

export default constant;