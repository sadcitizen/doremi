import distinct from '../distinct';
import identity from '../../func/identity';

/**
 * Concats the arrays and removes duplicates.
 * @param {Array} target The first array to concat.
 * @param {Array} [source=[]] The second array to concat.
 * @param {Function} [iteratee=identity] The function invoked per iteration.
 * @return {Array} Returns the concated array.
 *
 * @example
 * const a = ['a', 'b', 'c'];
 * const b = ['d', 'e', 'f'];
 * union(a, b);
 * // => ['a', 'b', 'c', 'd', 'e', 'f']
 */
export default function (target, source = [], iteratee = identity) {
    return distinct(target.concat(source), iteratee);
}
