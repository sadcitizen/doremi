import equals from '../../logic/equals';
import uniqueWith from '../unique-with';

/**
 * @param {Array} array
 * @param {Array} other
 * @param {Function} [comparator]
 * @returns {*[]}
 */
export default function (array, other, comparator = equals) {
    return uniqueWith([...array, ...other], comparator);
}
