import integer from './integer';
import isArray from '../is/is-array';

/**
 *
 * @param {Array} list The list to choice.
 * @returns {*} Returns the pseudo-random element.
 *
 * @example
 *
 * let list = [1, 2, 3];
 * choice(list);
 * // => 2
 *
 * choice('lorem', 'ipsum', 'sit');
 * // => 'sit'
 */
function choice(list) {
    let args = (arguments.length === 1 && isArray(list)) ? list : arguments;

    return args[integer(0, args.length - 1)];
}

export default choice;
