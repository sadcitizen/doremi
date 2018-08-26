import flatten from '../../array/flatten';
import integer from '../integer';

/**
 * Returns the pseudo-random element of array.
 *
 * @category random
 * @param {...Array} args
 * @returns {*}
 */
export default function (...args) {
    const variants = flatten(args);

    return variants[integer(0, variants.length - 1)];
}
