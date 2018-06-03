import flatten from '../../array/flatten';
import int from '../int';

/**
 * @param {...Array} args
 * @returns {*}
 *
 * @immutable
 */
export default function (...args) {
    const variants = flatten(args);

    return variants[int(0, variants.length - 1)];
}
