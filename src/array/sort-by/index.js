import identity from '../../func/identity';
import ternary from '../../logic/ternary';

/**
 * @param {Array} target
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @return {Array}
 */
export default function (target, iteratee = identity) {
    return target.sort((left, right) => {
        const l = iteratee(left);
        const r = iteratee(right);

        return ternary(l < r, -1, ternary(l > r, 1, 0));
    });
}
