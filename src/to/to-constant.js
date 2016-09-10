/**
 * Creates a function that returns `value`.
 *
 * @param target The value to return.
 * @returns {Function} Returns new function.
 *
 * @example
 *
 * var num = toConstant(42);
 * num();
 * // => 42
 *
 * var str = toConstant('value');
 * str();
 * // => 'value'
 */
function toConstant(target) {
    return () => target;
}

export default toConstant;