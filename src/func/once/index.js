import before from '../before';
import partialRight from '../partial-right';

/**
 * Returns a new function that invokes once and store the result of last call.
 *
 * @return Returns the new function.
 *
 * @example
 * const add = (x, y) => x +y;
 * const addOnce = once(add);
 * addOnce(1, 2);
 * // => 3
 * addOnce(3, 4);
 * // => 3
 * addOnce(5, 6);
 * // => 3
 */
export default partialRight(before, 2);
