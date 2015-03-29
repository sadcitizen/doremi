import array from '../is/array';
import append from './append';
import each from './each';

/**
 * Flattens a nested array. If `deep` is true the array is recursively
 * flattened, otherwise it is only flattened a single level.
 *
 * @param target The array to flatten.
 * @param deep Specify a deep flatten.
 * @returns {Array} The new flattened array.
 *
 * @example
 *
 * flatten([1, [2], [3, [[4]]]]);
 * // => [1, 2, 3, 4]
 *
 * flatten([1, [2], [3, [[4]]]], false);
 * // => [1, 2, 3, [[4]]]
 */
function flatten(target, deep = true) {
    let result = [];

    each(target, x => array(x) ? append(result, deep ? flatten(x, deep) : x) : result.push(x));

    return result;
}

export default flatten;