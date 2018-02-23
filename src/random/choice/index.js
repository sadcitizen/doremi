import int from '../int';

/**
 * @param {Array} list The list to choice.
 * @returns {*} Returns the pseudo-random element.
 */
export default function (list) {
    let args = (arguments.length === 1 && Array.isArray(list)) ? list : arguments;

    return args[int(0, args.length - 1)];
}
